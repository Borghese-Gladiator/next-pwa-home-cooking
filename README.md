# Home Cooking App
I'm cooking a lot recently and find it a pain to figure out my shopping list. Also, I don't like the current recipe sites with how much info they ask (I don't remember nor track any measurements).

I wrote down my recipes with ingredients and had ChatGPT classify them so I can group them in my app by section of the grocery store.


## Current Architecture
- `/app` - Next.js PWA app with MUIv5 components
  - ChatGPT prompt - `/app/src/utils/prompt.md`
- `/queries` - old SQL queries that are not relevant here (since my data is all in `/app/src/utils/constants.js`)
- `/archive` - previous project I forgot about that I just copy-pasted here cuz it's mostly the same

## To Do
- [ ] date night recipes
	- Sausage Bolognese (check the meat, I got no pasta machine tho) - https://youtube.com/shorts/vjtElH_af30?si=kwkY-vY4DAJgGOuN
	- Sesame Chicken - https://youtube.com/shorts/Nl0unk60Wqs?si=Fo7ooszESoUvWDto
	- Marry Me Chicken - https://youtube.com/shorts/5eSvGgT74s0?si=sxq-mK0avCtkzRBu
	- Pesto Orzo & Crispy Salmon - https://youtube.com/shorts/zMDKjmnS5hc?si=eXkyMYC8rxhk0esw
	- Elote (creamed corn, queso fresco, cilantro, lime, jalapeno)
- [ ] ref: create custom hook for selected recipes
- [ ] feat: dark mode
- [ ] feat: ingredients tab - click Chip to highlight ingredients
- [ ] add optional cooking instructions
- [ ] fix: boost performance by removing extra loops and utilizing IDs
- [ ] ref: docs - jsdoc per method to clarify logic


## Done
- [X] fix: Vercel build issue - missing key prop
- [X] write up below content
  - [X] 卤肉饭
  - [X] Ginger pork belly
  - [X] Miso salmon
  - [X] Garlic butter noodles
  - [X] Butter Chicken - https://youtube.com/shorts/ZkY-nOlaNQQ?si=6YzobNV--UJ9QF2F
  - [X] Burrito - https://youtube.com/shorts/5YVmZUK0_8Q?si=Uowd_JhaxFUenX9q
  - [X] Tacos Al Pastor
  - [X] Steak & Cheese (cheese whiz)
  - [X] Mapo Tofu (Mapo Doufu): Soft tofu cubes in a spicy chili bean paste sauce with minced meat and topped with Sichuan peppercorns and green onions.
  - [X] Kung Pao Chicken (Gong Bao Ji Ding): Tender chicken, peanuts, and dried chili peppers in a sweet and spicy sauce with Sichuan peppercorns for a numbing kick.
  - [X] Dan Dan Noodles (Dan Dan Mian): Spicy noodles topped with a savory sauce made from sesame paste, chili oil, minced meat, and crushed peanuts.
  - [X] Twice-Cooked Pork (Hui Guo Rou): Slices of boiled pork belly stir-fried with leeks, garlic, and fermented black beans for a rich and flavorful dish.
  - [X] Sushi Rolls (Maki) - Nori sheets, sushi rice, fresh fish, avocado, cucumber | Make your own sushi rolls using nori (seaweed) sheets, sushi rice, and a variety of fillings like fresh fish, avocado, cucumber, and more. 
  - [X] Tempura - Seafood (shrimp, squid, etc.), vegetables (sweet potatoes, zucchini, etc.), mushrooms, tempura batter, tentsuyu sauce | Lightly batter and deep-fry seafood, vegetables, and mushrooms. Serve with a dipping sauce like tentsuyu. 
  - [X] Teriyaki Chicken - Chicken thighs, soy sauce, mirin, sugar, vegetable oil | Grill or pan-fry chicken glazed with a sweet and savory teriyaki sauce made from soy sauce, mirin, and sugar. 
  - [X] Miso Soup - Dashi stock, miso paste, tofu, seaweed, green onions | Prepare a simple and comforting soup using dashi (fish and seaweed broth) and miso paste. Add tofu, seaweed, and green onions.
  - [X] Gyoza - Ground pork, cabbage, garlic, ginger, gyoza wrappers, soy sauce, sesame oil | Fill gyoza wrappers with a mixture of ground pork, cabbage, and garlic. Pan-fry until crispy on the bottom.
  - [X] Sesame Chicken - chicken, cornstarch, soy sauce, rice vinegar, honey, brown sugar, sesame oil
  - [X] Mac N Cheese - https://youtube.com/shorts/tyt5l3dNhCM?si=jsfRy4ppaOImJ5jZ
  - [X] 椒盐虾
  - [X] Katsudon - Pork cutlets, eggs, onions, soy sauce, mirin, sugar, rice | Deep-fry breaded pork cutlets and serve with eggs and onions in a sweet and savory sauce over rice.
  - [X] Yakitori - Chicken thighs, soy sauce, mirin, sake, green onions | Skewer and grill chicken pieces, seasoning with a glaze made from soy sauce, mirin, and sake. 
  - [X] Nigiri Sushi - Sushi rice, fresh fish, shrimp, eel, egg | Hand-press sushi rice and top with slices of fresh fish or other ingredients like shrimp, eel, or egg.
  - [X] Chirashi Sushi - Sushi rice, sashimi (tuna, salmon, etc.), vegetables (cucumber, avocado, etc.) | Prepare a vibrant sushi bowl with sushi rice topped with a variety of sashimi, vegetables, and other toppings.
  - [X] Turkey Veggie Guacamole Burger - Ground turkey, bell peppers, onions, garlic, avocado, burger buns | Grill ground turkey patties mixed with finely chopped bell peppers, onions, and garlic. Serve on burger buns with mashed avocado.
  - [X] Potato Smash - Potatoes, olive oil, salt, pepper, optional herbs | Boil potatoes until tender, then smash them with a fork or potato masher. Drizzle with olive oil and season with salt, pepper, and optional herbs. Bake until crispy.
  - [X] Fruit Salad - Assorted fruits (e.g., strawberries, grapes, pineapple, kiwi, mango), honey, lime juice, mint leaves | Chop fruits and toss them together with honey, lime juice, and fresh mint leaves.
  - [X] Greek Hummus Dip - Chickpeas, tahini, lemon juice, garlic, olive oil, salt, pepper, cucumber, cherry tomatoes, olives | Blend chickpeas, tahini, lemon juice, garlic, olive oil, salt, and pepper until smooth. Serve with sliced cucumber, cherry tomatoes, and olives for dipping.
  - [X] Raw Veggie Kababs - Assorted vegetables (e.g., bell peppers, cherry tomatoes, mushrooms, zucchini, onions), wooden skewers | Thread assorted vegetables onto wooden skewers. Serve raw as kababs.
  - [X] Hawaiian Chicken - Chicken breasts, pineapple chunks, bell peppers, onions, soy sauce, brown sugar, garlic, ginger, rice | Marinate chicken breasts in a mixture of soy sauce, brown sugar, garlic, and ginger. Grill chicken along with pineapple chunks, bell peppers, and onions. Serve over rice.
  - [X] Broccoli Pesto Pasta - Broccoli, pasta, basil pesto, Parmesan cheese | Cook pasta according to package instructions. Steam broccoli until tender. Toss cooked pasta and broccoli with basil pesto. Serve with grated Parmesan cheese.
  - [X] Parmesan Chicken Tenders - Chicken tenders, bread crumbs, Parmesan cheese, garlic powder, Italian seasoning, eggs | Dip chicken tenders in beaten eggs, then coat with a mixture of bread crumbs, Parmesan cheese, garlic powder, and Italian seasoning. Bake until golden and cooked through.
  - [X] Spaghetti with Crockpot Meatballs - Ground beef, bread crumbs, Parmesan cheese, garlic, onion, eggs, marinara sauce, spaghetti | Mix together ground beef, bread crumbs, Parmesan cheese, minced garlic, minced onion, and eggs. Form into meatballs and cook in a crockpot with marinara sauce. Serve over cooked spaghetti.
  - [X] Grilled Shrimp & Veggie Kebabs - Shrimp, bell peppers, cherry tomatoes, onions, zucchini, lemon, olive oil, salt, pepper, wooden skewers | Thread shrimp and assorted vegetables onto wooden skewers. Drizzle with olive oil, season with salt and pepper, and grill until shrimp is cooked through.
  - [X] Sweet and Spicy Grilled Chicken - Chicken breasts, soy sauce, honey, garlic, ginger, chili flakes | Marinate chicken breasts in a mixture of soy sauce, honey, minced garlic, minced ginger, and chili flakes. Grill until cooked through.
  - [X] Grilled Steak & Veggie Fajitas - Steak (e.g., flank steak), bell peppers, onions, tortillas, lime, olive oil, salt, pepper, cumin, chili powder | Marinate steak in a mixture of lime juice, olive oil, salt, pepper, cumin, and chili powder. Grill steak along with sliced bell peppers and onions. Serve with warm tortillas
  - [X] Pakistani Dinner
    - chicken rice
    - hummus
    - garlic hummus
    - cucumer salad - pepper, vinegar
    - kebabs 
  - [X] 红烧 - 米酒, 酱油, 盐, 唐, 鸡
  - [X] chili - https://m.youtube.com/watch?v=ZT3GlECfYoU&pp=ygUMY2hpbGkgcmVjaXBl
  - [X] 炸酱面
  - [X] 三杯鸡
  - [X] huge crockpot of spaghetti sauce with meat and veggies like mushrooms bell pepper onion sausage and hamburger
  - [X] large tray of cooked spaghetti noodles with parsley and oil
  - [X] garlic bread
  - [X] Green beans casserole 
  - [X] Chicken Parm Dinner
  - [X] Chicken Pad Thai
  - [X] Pineapple Fried Rice
  - [X] Yellow Curry
  - [X] Szechuan Beef - https://youtube.com/shorts/1QWIZ-cjm0E?si=nfBFOYEd2DzMfMUK
  - [X] Black Pepper Beef - https://youtube.com/shorts/d6lsWxqMDjw?si=q7tbpdDPopfiI3YJ
  - [X] Spicy Garlic Parmesan skewers - https://www.youtube.com/shorts/YFIxbMmhctA
  - [X] Chickpea Curry - https://www.youtube.com/shorts/naEpZKwbE_c
  - [X] Omelette Rice - https://youtube.com/shorts/QMSnLNPC4kQ?si=uqePWobw3ddhfL2g
  - [X] Cantonese Steamed Fish - https://youtube.com/shorts/tXgTlWtA8_M?si=YOoVCArdObNZl7pu
  - [X] Banana Bread
  - [X] Cheesecake - cottage cheese, yogurt, egg, toppings (strawberries)
  - [X] Grilled Cheese - sourdough, American cheese, butter
  - [X] Chicken Sandwich - American cheese, tomato, lettuce
  - [X] Japanese Croquette (クロッケー)
---
- [X] feat: add "Restaurants" modal
  - [X] add restaurant from kyou-mo-tsuki-ga-kirei
- [X] feat: UI update to divide by both meal type AND cuisine
- [X] feat: write up existing recipe constants
- [X] accordion closing on click
- [X] favicon
- [X] clear btn in right of tabs instead of in panel
- [X] fix: crossing out ingredients bolds them
- [X] add selected recipes at top in both recipes and ingredients 
- [X] remove top embed of PWA => full screen via manifest.json
- [X] fix: recipes panel - not sorting
---
- [X] feat: loading screen + remove top appbar + replace AppBar w/ tab thingy => DONE, barely used tho since loading is instant
- [X] fix: Vercel - debug failing deploy
- [X] feat: divide by both meal type AND cuisine
  - [X] rework UI to have collapsible meal types AND collapsible cuisines
  - [X] update constants to be default "dinner" category
- [X] feat: add "Restaurants" model
  - [X] add content from kyou-mo-tsuki-ga-kirei
---
- [X] fix: remove selected items from copyable shopping list
- [X] ref: move index.js content to components in `features/`
- [X] ref: convert to TypeScript
  - rename every file to `ts` or `tsx`
  - create `tsconfig.json` from `jsconfig.json`
  - `yarn add -D @types/uuid @types/lodash`
- [X] feat: app/index.js - add date to shoppingListText
- [X] update shopping list str to be new line separated with title case titles
- [X] fix: constants - update content to Japanese
- [X] feat: border colors on highlight
- [X] fix: retheme colors so primary is brighter than non-primary on dark mode => DONE, changed from primary to active thingy
- [X] feat: Responsive - support large monitors by turning into columns

### Learnings
Forgot to rename files to `tsx` resulting in weird errors when `ts` like `div not recognized`

## Iced
- [X] feat: write translation strings for each recipe
- [X] feat: color each group

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
Simplify weekly shopping - I write meals I want and use query to generate sorted shopping list


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
