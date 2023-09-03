# SQL Home Cooking
Simplify weekly shopping - I write meals I want and use query to generate sorted shopping list

## Current Architecture
- Next.js app
- 

<details>
<summary>Old Changes</summary>

## History
- Sep 1, 2023 - Genius me has now realized I need an app AND to use a NoSQL database like MongoDB where I duplicate data so I can actually write recipes w/o going crazy with data entry. SQL is amazing, but I have to SELECT ids every time I want to enter something basic.
- Apr 9, 2023 - Genius me realized I needed an app to use this thing on mobile and initialized a Next.js app to try to connect to ElephantSQL
- Nov 13, 2022 - Genius me thought I would use a SQL Client directly instead of any app to track my weekly groceries

Old Rant
> Originally, I thought I would have no app and just use SQL to directly query my shopping list, but it's way too much of a pain to find a SQL Client for mobile that I like. Since I'm too lazy to actually use this to create a shopping list beforehand and then put it in Google Keep Notes, I wrote up a PWA so I can do one click on mobile to select the meals I want.

> Furthermore, SQL is a normalized data store (no duplication of data) which is a pain in the ass for me to insert with because I have to draw relationships between each row of data when I want to just slap recipes in with random ingredients.

> The new change is to use MongoDB Atlas + Next.js PWA (to avoid the app store) on Vercel.


## SQL Architecture
ER Diagram below was generated using DBGate4

![er_diagram.png](/er_diagram.png)

## SQL Client Architecture
### ElephantSQL Setup
1. Create an account for a Postgres cloud SQL database provider
2. Add URI information in app/.env Connect to cloud SQL database via SQL client using URI information - `postgres://<db_username>:<db_password>@<db_host>:5432`

### Pro
- Generate shopping list via one SQL query
	```sql
		SELEcT ingredient.name, ingredient.store_location
			FROM meals AS meal
			JOIN meal_recipe_map AS mr_map ON meal.id = mr_map.meal_id
			JOIN recipes AS recipe ON recipe.id = mr_map.recipe_id
			JOIN recipe_ingredient_map AS map ON map.recipe_id = mr_map.recipe_id
			JOIN ingredients AS ingredient ON ingredient.id = map.ingredient_id
		UNION DISTINCT
		SELECT ingredient.name, ingredient.store_location
			FROM meal_ingredient_map AS map 
			JOIN meals AS meal ON meal.id = map.meal_id
			JOIN ingredients AS ingredient ON ingredient.id = map.ingredient_id
		WHERE meal.name='mexican dinner'
		ORDER BY store_location;
	```
- Easy to maintain table structure
  
### Con
- Lots of data entry since I'm using custom recipes (opted to not use allrecipes and other sites since it requires copious information per recipe like ingredient amounts - I wanted to just enter recipe name and ingredients list)

### Usage
1. Create an account for a Postgres cloud SQL database provider
2. Connect to cloud SQL database via SQL client using URI information - `postgres://<db_username>:<db_password>@<db_host>:5432`
3. Run data_bootstrapping.sql - `psql -h host -U username -d myDataBase -a -f query/data_bootstrapping.sql`
4. Run query_shopping_list.sql - `psql -h host -U username -d myDataBase -a -f query/query_shopping_list.sql`

My setup
- ElephantSQL
  - PRO - free Postgres cloud SQL database
  - CON - 2 GB limit
  - CON - PostgreSQL 11.12
- DBGate4 - SQL client (I recommend PyCharm's Database tab as a great alternative)



## Notes
- Table Relationshipos
  - One-to-One - add column in table to map to other table's foreign key
	- One-to-Many -
  - Many-to-Many - create mapping table (eg: recipes to ingredients) 

#### DBGate Learnings
- If you mess with the scrolls on Windows, you can make a panel permanently unavailable to view. If so, uninstall DBGate and then navigate to `C:\Users\<user>\AppData\Roaming` and delete the `dbgate` folder which holds the settings.
- Export diagram exports an HTML

#### Postgres Learnings
- use TEXT instead of VARCHAR since distinct name - https://stackoverflow.com/questions/4848964/difference-between-text-and-varchar-character-varying


</details>
