# SQL Home Cooking
Simplify weekly shopping - I write meals I want and use query to generate sorted shopping list

Pro
- Generate shopping list via one SQL query
- Easy to maintain table structure
  
Con
- Lots of data entry since I'm using custom recipes (opted to not use allrecipes and other sites since it requires copious information per recipe like ingredient amounts - I wanted to just enter recipe name and ingredients list)

## Usage
1. Create an account for a Postgres cloud SQL database provider
2. Connect to cloud SQL database via SQL client using URI information - `postgres://<db_username>:<db_password>@<db_host>:5432`
3. Run data_bootstrapping.sql - `psql -h host -U username -d myDataBase -a -f myInsertFile`
4. Run query_shopping_list.sql - `psql -h host -U username -d myDataBase -a -f myInsertFile`

My setup
- ElephantSQL - Postgres cloud SQL database to save data for free (2 GB limit)
- DBGate4 - SQL client (I recommend PyCharm's Database tab as a great alternative)

## Table Structure
ER Diagram - generated using DBGate4

![er_diagram.png](/er_diagram.png)

## Commands
Execute SQL file on remote
```sql
psql -h host -U username -d myDataBase -a -f myInsertFile
```

#### Postgres Import/Export
Import
```bash
export PGPASSWORD=<>
pg_dump --host <> --port 5432 --username <> --dbname <> --schema public --format custom --schema-only --file schema.dump --no-privileges --no-security-labels --no-tablespaces --verbose
pg_dump --host <> --port 5432 --username <> --dbname <> --schema public --format custom --data-only --file data.dump --no-privileges --no-security-labels --no-tablespaces --verbose
```

Export
```bash
SERVICE_IP=<127.0.0.1:5432>
export PGPASSWORD=<>
pg_restore --host $SERVICE_IP --port 5432 --user postgres --dbname postgres --no-owner --no-privileges --no-security-labels --clean --if-exists --verbose schema.dump
pg_restore --host $SERVICE_IP --port 5432 --user postgres --dbname postgres --no-owner --no-privileges --no-security-labels --clean --if-exists --disable-triggers --verbose data.dump
```

#### SQL Import/Export
This does not preserve relationships (so not very useful unless extracting data from one table)
```sql
-- Import data from CSV files
COPY ingredients FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meal_ingredient_map FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meal_recipe_map FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meals FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY recipe_ingredient_map FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY recipes FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY restaurants FROM '<filepath.csv>' DELIMITER ',' CSV HEADER;

-- Export data to CSV files
COPY ingredients TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meal_ingredient_map TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meal_recipe_map TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY meals TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY recipe_ingredient_map TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY recipes TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
COPY restaurants TO '<filepath.csv>' DELIMITER ',' CSV HEADER;
```

---

## Notes
- Table Relationshipos
  - One-to-One - add column in table to map to other table's foreign key
	- One-to-Many -
  - Many-to-Many - create mapping table (eg: recipes to ingredients) 

#### DBGate Learni;ngs
- - If you mess with the scrolls on Windows, you can make a panel permanently unavailable to view. If so, uninstall DBGate and then navigate to `C:\Users\<user>\AppData\Roaming` and delete the `dbgate` folder which holds the settings.
- Export diagram exports an HTML

#### Postgres Learnings
- use TEXT instead of VARCHAR since distinct name - https://stackoverflow.com/questions/4848964/difference-between-text-and-varchar-character-varying

