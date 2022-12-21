CREATE TABLE recipes (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name TEXT DEFAULT '' NOT NULL UNIQUE
);

CREATE TABLE ingredients (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name TEXT DEFAULT '' NOT NULL UNIQUE,
	store_location TEXT DEFAULT 'aisle' CHECK (
		store_location IN ('dairy', 'aisle', 'produce', 'deli')
	),
	blacklist_stores TEXT DEFAULT 'any' CHECK (
		blacklist_stores IN ('any', 'hmart', 'costcos', '新东方')
	)
);

CREATE TABLE recipe_ingredient_map (
	recipe_id int references recipes,
	ingredient_id int references ingredients,
	PRIMARY KEY (recipe_id, ingredient_id),
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE meals (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name TEXT DEFAULT '' NOT NULL UNIQUE
);

CREATE TABLE meal_recipe_map (
	meal_id int references meals,
	recipe_id int references recipes,
	PRIMARY KEY (meal_id, recipe_id),
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE meal_ingredient_map (
	meal_id int references meals,
	ingredient_id int references ingredients,
	PRIMARY KEY (meal_id, ingredient_id),
	created_at timestamp DEFAULT current_timestamp,
	updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE restaurants (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name TEXT DEFAULT '' NOT NULL UNIQUE
);

CREATE TRIGGER update_meal_ingredient_map_updated_at BEFORE
UPDATE
	ON meal_ingredient_map FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_meal_recipe_map_updated_at BEFORE
UPDATE
	ON meal_recipe_map FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_recipe_ingredient_map_updated_at BEFORE
UPDATE
	ON recipe_ingredient_map FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE
OR REPLACE FUNCTION update_column_updated_at() RETURNS TRIGGER AS $ $ BEGIN IF row(NEW.*) IS DISTINCT
FROM
	row(OLD.*) THEN NEW.updated_at = now();

RETURN NEW;

ELSE RETURN OLD;

END IF;

END;

$ $ language 'plpgsql';

INSERT INTO
	ingredients (name, store_location, blacklist_stores)
VALUES
	('spaghetti', DEFAULT, DEFAULT),
	('tomato sauce', DEFAULT, DEFAULT),
	('tomato paste', DEFAULT, DEFAULT),
	('chicken broth', DEFAULT, DEFAULT),
	('chicken breast', DEFAULT, DEFAULT),
	('chicken white meat', DEFAULT, DEFAULT),
	('chicken dark meat', DEFAULT, DEFAULT),
	('chicken thigh meat', DEFAULT, DEFAULT),
	('frozen oysters', DEFAULT, DEFAULT),
	('salsa verde', DEFAULT, DEFAULT),
	('salsa rojo', DEFAULT, DEFAULT),
	('potatoes', 'produce', DEFAULT),
	('tomatoes', 'produce', DEFAULT),
	('bananas', 'produce', 'hmart'),
	('carrots', 'produce', DEFAULT),
	('ginger', 'produce', DEFAULT),
	('ranch dressing', DEFAULT, DEFAULT),
	('penne', DEFAULT, DEFAULT),
	('bell peppers', 'produce', DEFAULT),
	('apples', 'produce', DEFAULT),
	('grapes', 'produce', DEFAULT),
	('canned beans', DEFAULT, DEFAULT),
	('canned corn', DEFAULT, DEFAULT),
	('pecorino romano', 'dairy', DEFAULT),
	('jarlsberg cheese', 'dairy', DEFAULT),
	('fresh mozzarella cheese', 'dairy', DEFAULT),
	('shredded mozzarella cheese', 'dairy', DEFAULT),
	('american cheese', 'dairy', DEFAULT),
	('brie cheese', 'dairy', DEFAULT),
	('cheddar cheese', 'dairy', DEFAULT),
	('parmesan cheese', 'dairy', DEFAULT),
	('peppaer jack cheese', 'dairy', DEFAULT),
	('provolone cheese', 'dairy', DEFAULT),
	('ricotta cheese', 'dairy', DEFAULT),
	('swiss cheese', 'dairy', DEFAULT),
	('cream cheese', 'dairy', DEFAULT),
	('海鲜酱', DEFAULT, DEFAULT),
	('蒜蓉辣椒酱', DEFAULT, DEFAULT),
	('豆瓣酱', DEFAULT, DEFAULT),
	('酱油', DEFAULT, DEFAULT),
	('大白菜', DEFAULT, DEFAULT),
	('高利贷', DEFAULT, DEFAULT),
	('香菜', DEFAULT, DEFAULT),
	('白萝卜', DEFAULT, DEFAULT),
	('红萝卜', DEFAULT, DEFAULT),
	('丸子', DEFAULT, DEFAULT),
	('bagel', DEFAULT, DEFAULT),
	('baguette', DEFAULT, DEFAULT),
	('italian parsley', 'produce', DEFAULT),
	('大蒜', DEFAULT, DEFAULT),
	('garlic', 'produce', DEFAULT),
	('scallions', 'produce', DEFAULT),
	('sugar', DEFAULT, DEFAULT),
	('black pepper', DEFAULT, DEFAULT),
	('ground pork', DEFAULT, DEFAULT),
	('ground beef', DEFAULT, DEFAULT),
	('eggs', 'dairy', DEFAULT),
	('turmeric', DEFAULT, DEFAULT),
	('lettuce', 'produce', DEFAULT),
	('pickles', DEFAULT, DEFAULT),
	('burger buns', DEFAULT, DEFAULT),
	('mayonnaise', DEFAULT, DEFAULT),
	('half and half', 'dairy', DEFAULT),
	('heavy cream', 'dairy', DEFAULT),
	('yogurt', 'dairy', DEFAULT),
	('shredded cheddar cheese', 'dairy', DEFAULT),
	('cayenne pepper', DEFAULT, DEFAULT),
	('bread crumbs', DEFAULT, DEFAULT),
	('white bread', DEFAULT, DEFAULT),
	('bread', DEFAULT, DEFAULT),
	('oats', DEFAULT, DEFAULT),
	('meatballs', DEFAULT, DEFAULT),
	('white mushrooms', 'produce', DEFAULT),
	('long grain rice', DEFAULT, DEFAULT),
	('粽子', DEFAULT, DEFAULT),
	('plain yogurt', DEFAULT, DEFAULT),
	('brown cow yogurt', DEFAULT, DEFAULT),
	('deli meat', 'deli', DEFAULT),
	('deli cheese', 'deli', DEFAULT),
	('deli turkey meat', 'deli', DEFAULT),
	('whole wheat bread', DEFAULT, DEFAULT),
	('cilantro', 'produce', DEFAULT),
	('basil', 'produce', DEFAULT),
	('pine nuts', DEFAULT, DEFAULT),
	('mandarin oranges', 'produce', DEFAULT),
	('watermelon', 'produce', DEFAULT),
	('blueberries', 'produce', DEFAULT),
	('strawberries', 'produce', DEFAULT),
	('cantaloupe', 'produce', DEFAULT),
	('ketchup', DEFAULT, DEFAULT),
	('frozen chicken nuggets', DEFAULT, DEFAULt),
	('frozen chicken pot pie', DEFAULT, DEFAULt),
	('chicken stock', DEFAULT, DEFAULT),
	('cornstarch', DEFAULT, DEFAULT),
	('red miso', DEFAULT, DEFAULT),
	('katsuobushi', DEFAULT, DEFAULT),
	('cardini caesar croutons', DEFAULT, DEFAULT),
	('romaine lettuce', 'produce', DEFAULT),
	(
		'marzetti caesar salad dressing',
		DEFAULT,
		DEFAULT
	),
	('russet/yukon potatoes', 'produce', DEFAULT),
	('green beans', DEFAULT, DEFAULT),
	('paprika', DEFAULT, DEFAULT),
	('onion powder', DEFAULT, DEFAULT),
	('soy sauce', DEFAULT, DEFAULT),
	('soy sauce paste', DEFAULT, DEFAULT),
	('酱油膏', DEFAULT, DEFAULT),
	('shrimp', DEFAULT, DEFAULT),
	('olive oil', DEFAULT, DEFAULT),
	('salt', DEFAULT, DEFAULT),
	('onions', 'produce', DEFAULT),
	('canned tomatoes', DEFAULT, DEFAULT);

INSERT INTO
	recipes (name)
VALUES
	('火锅'),
	('牛肉面'),
	('sausage egg and cheese bagel'),
	('番茄炒蛋'),
	('辣子鸡'),
	('omelette'),
	('spaghetti and meatballs'),
	('cookies'),
	('shrimp scampi'),
	('稀饭'),
	('scrambled egg toast'),
	('oatmeal'),
	('loaded potatoes'),
	('grilled cheese'),
	('egg fried rice'),
	('egg drop soup'),
	('deli sandwich'),
	('miso soup'),
	('caesar salad'),
	('garlic bread'),
	('garlic mashed potatoes'),
	('guacamole'),
	('mexican rice'),
	('mexican beans'),
	('mexican chicken'),
	('pico de gallo'),
	('terikyaki chicken'),
	('shakshuka');

WITH inputvalues(recipe, ingredient) AS (
	VALUES
		('火锅', '丸子'),
		('火锅', '大白菜'),
		('火锅', '香菇'),
		('火锅', '白萝卜'),
		('火锅', '红萝卜'),
		('火锅', '沙茶酱'),
		('火锅', '大蒜'),
		('火锅', 'cilantro'),
		('火锅', 'scallions'),
		('spaghetti and meatballs', 'spaghetti'),
		('spaghetti and meatballs', 'tomato sauce'),
		('spaghetti and meatballs', 'onions'),
		('spaghetti and meatballs', 'meatballs'),
		('spaghetti and meatballs', 'olive oil'),
		('garlic bread', 'olive oil'),
		('garlic bread', 'baguette'),
		('garlic bread', 'garlic'),
		('garlic bread', 'basil'),
		('garlic bread', 'italian parsley'),
		('番茄炒蛋', 'tomatoes'),
		('番茄炒蛋', 'eggs'),
		('番茄炒蛋', 'sugar'),
		('番茄炒蛋', 'salt'),
		('番茄炒蛋', 'vegetable oil'),
		('辣子鸡', '蒜蓉辣椒酱'),
		('辣子鸡', '辣豆瓣酱'),
		('辣子鸡', 'chicken breast'),
		('辣子鸡', 'vegetable oil'),
		('辣子鸡', 'garlic'),
		('mexican rice', 'vegetable oil'),
		('mexican rice', 'long grain rice'),
		('mexican rice', 'carrots'),
		('mexican rice', 'green beans'),
		('mexican rice', 'garlic'),
		('mexican rice', 'black pepper'),
		('mexican rice', 'salt'),
		('mexican rice', 'cumin'),
		('mexican rice', 'chicken broth'),
		('mexican rice', 'tomato paste'),
		('mexican chicken', 'vegetable oil'),
		('mexican chicken', 'cumin'),
		('mexican chicken', 'paprika'),
		('mexican chicken', 'chili powder'),
		('mexican chicken', 'salt'),
		('mexican chicken', 'black pepper'),
		('mexican chicken', 'chicken breast'),
		('guacamole', 'avocados'),
		('guacamole', 'onions'),
		('guacamole', 'tomatoes'),
		('guacamole', 'lime'),
		('mexican beans', 'canned beans'),
		('mexican beans', 'chicken broth'),
		('mexican beans', 'onions'),
		('mexican beans', 'garlic'),
		('meatloaf', 'ketchup'),
		('meatloaf', 'ground pork'),
		('meatloaf', 'ground beef'),
		('meatloaf', 'onions'),
		('omelette', 'eggs'),
		('omelette', 'bell peppers'),
		('omelette', 'onions'),
		('omelette', 'shredded mozzarella cheese'),
		('omelette', 'white mushrooms'),
		('omelette', 'butter'),
		('sausage egg and cheese bagel', 'bagel'),
		('sausage egg and cheese bagel', 'cream cheese'),
		('sausage egg and cheese bagel', 'sausage'),
		('sausage egg and cheese bagel', 'eggs'),
		('scrambled egg toast', 'bread'),
		('scrambled egg toast', 'butter'),
		('scrambled egg toast', 'eggs'),
		('scrambled egg toast', 'feta cheese'),
		('oatmeal', 'oats'),
		('oatmeal', 'milk'),
		('oatmeal', 'bananas'),
		('oatmeal', 'almonds'),
		('pasta', 'penne'),
		('pasta', 'tomato sauce'),
		('pasta', 'pecorino romano'),
		('pasta', 'meatballs'),
		('loaded potatoes', 'potatoes'),
		('loaded potatoes', 'butter'),
		('loaded potatoes', 'black pepper'),
		('loaded potatoes', 'salt'),
		('loaded potatoes', 'cheddar cheese'),
		('grilled cheese', 'white bread'),
		('grilled cheese', 'fresh cheddar cheese'),
		('grilled cheese', 'tomatoes'),
		('egg fried rice', 'long grain rice'),
		('egg fried rice', 'vegetable oil'),
		('egg fried rice', 'eggs'),
		('egg fried rice', 'onions'),
		('egg fried rice', 'scallions'),
		('egg fried rice', 'soy sauce'),
		('egg fried rice', 'five-spice powder'),
		('egg fried rice', 'sesame oil'),
		('deli sandwich', 'whole wheat bread'),
		('deli sandwich', 'mayonnaise'),
		('deli sandwich', 'deli turkey meat'),
		('deli sandwich', 'deli cheese'),
		('egg drop soup', 'chicken stock'),
		('egg drop soup', 'sesame oil'),
		('egg drop soup', 'salt'),
		('egg drop soup', 'sugar'),
		('egg drop soup', 'white pepper'),
		('egg drop soup', 'cornstarch'),
		('egg drop soup', 'eggs'),
		('egg drop soup', 'scallions'),
		('miso soup', 'red miso'),
		('miso soup', 'katsuobushi'),
		('miso soup', 'chicken stock'),
		('miso soup', 'scallions'),
		('miso soup', 'tofu'),
		('miso soup', 'wakame'),
		('caesar salad', 'olive oil'),
		('caesar salad', 'romaine lettuce'),
		('caesar salad', 'parmesan cheese'),
		('caesar salad', 'cardini caesar croutons'),
		('caesar salad', 'marzetti caesar salad dressing'),
		('garlic mashed potatoes', 'garlic'),
		('garlic mashed potatoes', 'butter'),
		('garlic mashed potatoes', 'black pepper'),
		('garlic mashed potatoes', 'potatoes'),
		('pico de gallo', 'onions'),
		('pico de gallo', 'tomatoes'),
		('pico de gallo', 'cilantro'),
		('pico de gallo', 'lime'),
		('terikyaki chicken', 'soy sauce'),
		('terikyaki chicken', 'chicken breast'),
		('terikyaki chicken', 'mirin'),
		('terikyaki chicken', 'sugar'),
		('terikyaki chicken', 'garlic'),
		('shakshuka', 'garlic'),
		('shakshuka', 'onions'),
		('shakshuka', 'bell peppers'),
		('shakshuka', 'feta cheese'),
		('shakshuka', 'canned tomatoes')
)
INSERT INTO
	recipe_ingredient_map (recipe_id, ingredient_id)
SELECT
	recipe.id,
	ingredient.id
FROM
	inputvalues AS ing
	JOIN ingredients AS ingredient ON ingredient.name = ing.ingredient
	JOIN recipes AS recipe ON recipe.name = ing.recipe;

INSERT INTO
	meals(name)
VALUES
	('mexican dinner'),
	('meatloaf dinner'),
	('mexican breakfast'),
	('indian dinner'),
	('teriyaki chicken dinner');

WITH inputvalues(meal, recipe) AS (
	VALUES
		('mexican dinner', 'mexican rice'),
		('mexican dinner', 'mexican chicken'),
		('mexican dinner', 'mexican beans'),
		('mexican dinner', 'guacamole'),
		('mexican dinner', 'pico de gallo'),
		('meatloaf dinner', 'meatloaf'),
		('meatloaf dinner', 'garlic mashed potatoes')
)
INSERT INTO
	meal_recipe_map (meal_id, recipe_id)
SELECT
	meal.id,
	recipe.id
FROM
	inputvalues AS ing
	JOIN meals AS meal ON meal.name = ing.meal
	JOIN recipes AS recipe ON recipe.name = ing.recipe;

WITH inputvalues(meal, ingredient) AS (
	VALUES
		('mexican dinner', 'lettuce'),
		('mexican dinner', 'salsa verde'),
		('meatloaf dinner', 'canned corn')
)
INSERT INTO
	meal_ingredient_map (meal_id, ingredient_id)
SELECT
	meal.id,
	ingredient.id
FROM
	inputvalues AS ing
	JOIN meals AS meal ON meal.name = ing.meal
	JOIN ingredients AS ingredient ON ingredient.name = ing.ingredient;

INSERT INTO
	restaurants(name)
VALUES
	('pizza'),
	('hyderabad palace'),
	('sichuan gourmet'),
	('ocho'),
	('sapporo'),
	('chipotle');

-- DROP TABLE IF EXISTS ingredients, recipes, recipe_ingredient_map, meals, meal_recipe_map, meal_ingredient_map, restaurants CASCADE;