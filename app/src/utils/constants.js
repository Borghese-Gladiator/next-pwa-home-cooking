export const recipes = [{
  name: "curry",
  ingredientList: [{
    name: "carrot",
    category: "produce",
  }, {
    name: "potato",
    category: "produce",
  }, {
    name: "chicken",
    category: "meat",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "Vermont Curry Roux",
    category: "misc",
  }],
}, {
  name: "strapatsada",
  ingredientList: [{
    name: "olive oil",
    category: "aisle",
  }, {
    name: "feta cheese",
    category: "dairy",
  }, {
    name: "white bread",
    category: "aisle",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "tomato",
    category: "produce",
  }],
}, {
  name: "肉松三明治",
  ingredientList: [{
    name: "肉松",
    category: "meat",
  }, {
    name: "cucumber",
    category: "produce",
  }, {
    name: "white bread",
    category: "aisle",
  }, {
    name: "mayonnaise",
    category: "sauce",
  }],
}, {
  name: "火锅",
  ingredientList: [{
    name: "丸子",
    category: "meat",
  }, {
    name: "nappa cabbage",
    category: "produce",
  }, {
    name: "shiitake mushroom",
    category: "produce",
  }, {
    name: "enoki mushroom",
    category: "produce",
  }, {
    name: "daikon",
    category: "produce",
  }, {
    name: "carrot",
    category: "produce",
  }, {
    name: "沙茶酱",
    category: "sauce",
  }, {
    name: "芝麻将",
    category: "misc",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }, {
    name: "scallions",
    category: "produce",
  }],
}];


/*
RAW INPUT to ChatGPT
input = [{
  name: "curry",
  ingredientList: ["carrot", "potato", "chicken", "onion", "Vermont Curry Roux"],
}, {
  name: "strapatsada",
  ingredientList: ["olive oil", "feta cheese", "white bread", "egg", "tomato",],
}, {
  name: "肉松三明治",
  ingredientList: ["肉松", "cucumber", "white bread", "mayonnaise"],
}, {
  name: "火锅",
  ingredientList: ["丸子", "nappa cabbage", "shiitake mushroom", "enoki mushroom", "daikon", "carrot", "沙茶酱", "芝麻将", "garlic", 'cilantro', 'scallions'],
}];

PROMPT
Given the following list of ingredients, categorize each ingredient into one of the following: ['dairy', 'aisle', 'produce', 'deli', 'meat']

Write the output in the following format:
output = [{
  name: "curry",
  ingredientList: [{
    name: "carrot",
    category: "produce",
  }, {
    name: "potato",
    category: "produce",
  }, {
    name: "chicken",
    category: "meat",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "Vermont Curry Roux",
    category: "misc",
  }],
}];

Ingredient List
{
  name: "strapatsada",
  ingredientList: ["olive oil", "feta cheese", "white bread", "egg", "tomato",],
},
*/