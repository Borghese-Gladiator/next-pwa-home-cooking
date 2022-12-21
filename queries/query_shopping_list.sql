-- Get shopping list
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

/*
SELECT 
  ingredient.name, 
  ingredient.store_location 
FROM 
  meals AS meal 
  JOIN meal_recipe_map AS mr_map ON meal.id = mr_map.meal_id 
  JOIN recipes AS recipe ON recipe.id = mr_map.recipe_id 
  JOIN recipe_ingredient_map AS map ON map.recipe_id = mr_map.recipe_id 
  JOIN ingredients AS ingredient ON ingredient.id = map.ingredient_id 
UNION DISTINCT 
SELECT 
  ingredient.name, 
  ingredient.store_location 
FROM 
  meal_ingredient_map AS map 
  JOIN meals AS meal ON meal.id = map.meal_id 
  JOIN ingredients AS ingredient ON ingredient.id = map.ingredient_id 
WHERE 
  meal.name = 'mexican dinner' 
  OR meal.name = 'meatloaf dinner' 
UNION DISTINCT
SELECT 
  ingredient.name, 
  ingredient.store_location 
FROM recipes AS recipe
JOIN recipe_ingredient_map AS map ON map.recipe_id = recipe.id 
JOIN ingredients AS ingredient ON ingredient.id = map.ingredient_id 
WHERE
    recipe.name = 'omelette'
    OR recipe.name = '火锅'
ORDER BY 
  store_location, 
  name;
*/