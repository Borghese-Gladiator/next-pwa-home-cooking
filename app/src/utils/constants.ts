import { Recipe } from "@/common/types";

export const recipes: Recipe[] = [{
  name: "aglio e olio",
  cuisine: "italian",
  meal: "dinner",
  ingredientList: [{
    name: "pasta",
    category: "aisle",
  }, {
    name: "olive oil",
    category: "aisle",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "black pepper",
    category: "misc",
  }, {
    name: "pecorino romano",
    category: "dairy",
  }],
}, {
  name: "Spaghetti Pomodoro (Tomato Basil Pasta)",
  cuisine: "italian",
  meal: "dinner",
  ingredientList: [{
    name: "pasta",
    category: "aisle",
  }, {
    name: "olive oil",
    category: "aisle",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "peeled canned tomatoes",
    category: "aisle",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "basil",
    category: "produce",
  }, {
    name: "lemon juice",
    category: "aisle",
  }, {
    name: "pecorino romano",
    category: "dairy",
  }, {
    name: "black pepper",
    category: "misc",
  }, ],
}, {
  name: "shrimp scampi",
  cuisine: "italian",
  meal: "dinner",
  ingredientList: [{
    name: "shrimp",
    category: "seafood",
  }, {
    name: "pasta",
    category: "aisle",
  }, {
    name: "olive oil",
    category: "aisle",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "basil",
    category: "produce",
  }, {
    name: "black pepper",
    category: "misc",
  }],
}, {
  name: "カレー",
  cuisine: "japanese",
  meal: "dinner",
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
  cuisine: "misc",
  meal: "dinner",
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
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "肉松",
    category: "misc",
  }, {
    name: "cucumber",
    category: "produce",
  }, {
    name: "white bread",
    category: "aisle",
  }, {
    name: "mayonnaise",
    category: "misc",
  }],
}, {
  name: "火锅",
  cuisine: "chinese",
  meal: "dinner",
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
    category: "misc",
  }, {
    name: "芝麻酱",
    category: "misc",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }],
}, {
  name: "餃子 (gyoza)",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "water",
    category: "misc",
  }, {
    name: "flour",
    category: "aisle",
  }, {
    name: "pork",
    category: "meat",
  }, {
    name: "garlic chive",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "soy sauce",
    category: "misc",
  }, {
    name: "sesame oil",
    category: "misc",
  }],
}, {
  name: "cilantro lime rice",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "rice",
    category: "aisle",
  }, {
    name: "lime",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }],
}, {
  name: "pico de gallo",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "tomato",
    category: "produce",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }, {
    name: "lime",
    category: "produce",
  }, {
    name: "jalapeno",
    category: "produce",
  }],
}, {
  name: "guacamole",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "avocado",
    category: "produce",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "lime",
    category: "produce",
  }],
}, {
  name: "mexican chicken",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "chicken thigh",
    category: "meat",
  }, {
    name: "cumin",
    category: "misc",
  }, {
    name: "salt",
    category: "misc",
  }, {
    name: "black pepper",
    category: "misc",
  }],
}, {
  name: "mexican beans",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "canned pinto bean",
    category: "canned goods",
  }, {
    name: "salt",
    category: "misc",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "onion",
    category: "produce",
  }],
}, {
  name: 'mexican rice',
  cuisine: 'mexican',
  meal: "dinner",
  ingredientList: [{
    name: 'rice',
    category: 'aisle',
  }, {
    name: 'canned tomato',
    category: 'canned goods',
  }, {
    name: 'frozen pees',
    category: 'frozen',
  }, {
    name: 'chicken stock',
    category: 'canned goods',
  }, {
    name: 'mexican cheese (chedar / monterey jack)',
    category: 'dairy',
  }],
}, {
  name: "だし巻き卵",
  cuisine: "japanese",
  ingredientList: [{
    name: "egg",
    category: "dairy",
  }, {
    name: "dashi",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }, {
    name: "sugar",
    category: "misc",
  }, {
    name: "soy sauce",
    category: "misc",
  }, {
    name: "米酒",
    category: "aisle",
  }],
}, {
  name: "牛丼",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "fatty beef",
    category: "meat",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "dashi",
    category: "aisle",
  }, {
    name: "sake",
    category: "aisle",
  }, {
    name: "soy sauce",
    category: "misc",
  }, {
    name: "mirin",
    category: "aisle",
  }],
}, {
  name: "昆布佃煮",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "kombu",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }, {
    name: "sugar",
    category: "misc",
  }, {
    name: "sake",
    category: "aisle",
  }],
}, {
  name: "salad burrito",
  cuisine: "misc",
  meal: "dinner",
  ingredientList: [{
    name: "large tortilla",
    category: "aisle",
  }, {
    name: "salad",
    category: "produce",
  }, {
    name: "hummus",
    category: "misc",
  }, {
    name: "balsamic",
    category: "aisle",
  }, {
    name: "feta cheese",
    category: "dairy",
  }],
}, {
  name: 'salad',
  cuisine: 'misc',
  meal: "dinner",
  ingredientList: [{
    name: 'mixed greens',
    category: 'produce',
  }, {
    name: 'hummus',
    category: 'misc',
  }, {
    name: 'balsamic vinegar',
    category: 'aisle',
  }, {
    name: 'feta cheese',
    category: 'dairy',
  }],
}, {
  name: "kimchi spaghetti",
  cuisine: "korean",
  meal: "dinner",
  ingredientList: [{
    name: "spaghetti",
    category: "aisle",
  }, {
    name: "kimchi",
    category: "misc",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "bacon",
    category: "meat",
  }, {
    name: "mushroom",
    category: "produce",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "soy sauce",
    category: "misc",
  }, {
    name: "gochujang",
    category: "aisle",
  }, {
    name: "salt",
    category: "misc",
  }, {
    name: "scallion",
    category: "produce",
  }],
}, {
  name: "banana bread",
  cuisine: "misc",
  meal: "snack",
  ingredientList: [{
    name: "banana",
    category: "produce",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "baking soda",
    category: "aisle",
  }, {
    name: "salt",
    category: "misc",
  }, {
    name: "sugar",
    category: "misc",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "vanilla extract",
    category: "aisle",
  }, {
    name: "flour",
    category: "aisle",
  }],
}, {
  name: "fancy bagel",
  cuisine: "misc",
  meal: "dinner",
  ingredientList: [{
    name: "sesame seed bagel",
    category: "aisle",
  }, {
    name: "prosciutto",
    category: "deli",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "mozzarella cheese",
    category: "dairy",
  }, {
    name: "provolone",
    category: "dairy",
  }],
}, {
  name: "豚カツ",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "pork shoulder",
    category: "meat",
  }, {
    name: "salt",
    category: "aisle",
  }, {
    name: "black pepper",
    category: "aisle",
  }, {
    name: "flour",
    category: "aisle",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "panko",
    category: "aisle",
  }, {
    name: "cabbage",
    category: "produce",
  }],
}, {
  name: "オムライス",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "rice",
    category: "aisle",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "carrot",
    category: "produce",
  }, {
    name: "frozen mixed veggies",
    category: "frozen",
  }, {
    name: "chicken stock",
    category: "canned goods",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "ketchup",
    category: "aisle",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "dashi",
    category: "aisle",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }, {
    name: "sake",
    category: "aisle",
  }],
}, {
  name: "親子丼",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "dashi",
    category: "aisle",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "sake",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }, {
    name: "sugar",
    category: "aisle",
  }, {
    name: "chicken",
    category: "meat",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "egg",
    category: "dairy",
  }],
}, {
  name: "お好み焼き",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "pork belly",
    category: "meat",
  }, {
    name: "flour",
    category: "aisle",
  }, {
    name: "cabbage",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "frozen shrimp",
    category: "seafood",
  }, {
    name: "frozen mixed veggies",
    category: "frozen",
  }, {
    name: "fresh yakisoba noodles",
    category: "aisle",
  }, {
    name: "Okonomiyaki sauce (or ketchup + worcestershire + sugar)",
    category: "aisle",
  }, {
    name: "Kewpie mayonnaise",
    category: "aisle",
  }, {
    name: "bonito flakes",
    category: "seafood",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "aonori",
    category: "misc",
  }],
}, {
  name: "kimchi jjigae",
  cuisine: "korean",
  meal: "dinner",
  ingredientList: [{
    name: "onion",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "pork belly",
    category: "meat",
  }, {
    name: "kimchi",
    category: "misc",
  }, {
    name: "Korean soft tofu",
    category: "dairy",
  }, {
    name: "gochugaru",
    category: "aisle",
  }, {
    name: "sesame oil",
    category: "misc",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "dried kombu",
    category: "aisle",
  }, {
    name: "dried anchovies",
    category: "seafood",
  }],
}, {
  name: "miso soup",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "dashi",
    category: "aisle",
  }, {
    name: "silken tofu",
    category: "dairy",
  }, {
    name: "bonito flakes",
    category: "seafood",
  }, {
    name: "wakame",
    category: "aisle",
  }, {
    name: "red miso",
    category: "aisle",
  }],
}, {
  name: "麻婆豆腐",
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "pork loin",
    category: "meat",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "silken tofu",
    category: "dairy",
  }, {
    name: "豆瓣酱",
    category: "aisle",
  }, {
    name: "蒜蓉辣椒酱",
    category: "aisle",
  }],
}, {
  name: "京酱肉丝",
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "garlic",
    category: "produce",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "pork loin",
    category: "meat",
  }, {
    name: "甜面酱",
    category: "aisle",
  }],
}, {
  name: "simmered potatoes",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "potatoes",
    category: "produce",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "sugar",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }],
}, {
  name: "hamburg steak",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "carrot",
    category: "produce",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "shiitake mushroom",
    category: "produce",
  }, {
    name: "panko",
    category: "aisle",
  }, {
    name: "milk",
    category: "dairy",
  }, {
    name: "ground beef",
    category: "meat",
  }, {
    name: "ground pork",
    category: "meat",
  }, {
    name: "nutmeg",
    category: "aisle",
  }, {
    name: "flour",
    category: "aisle",
  }, {
    name: "red wine (or red wine vinegar",
    category: "aisle",
  }, {
    name: "ketchup",
    category: "aisle",
  }, {
    name: "worcestershire sauce",
    category: "aisle",
  }, {
    name: "honey",
    category: "aisle",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "cherry tomato",
    category: "produce",
  }, {
    name: "mushroom",
    category: "produce",
  }],
}, {
  name: "shakshuka",
  cuisine: "misc",
  meal: "dinner",
  ingredientList: [{
    name: "onion",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "bell pepper",
    category: "produce",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }, {
    name: "cumin",
    category: "misc",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "feta cheese",
    category: "dairy",
  }, {
    name: "pita bread",
    category: "aisle",
  }],
}, {
  name: "green shakshuka",
  cuisine: "misc",
  meal: "dinner",
  ingredientList: [{
    name: "onion",
    category: "produce",
  }, {
    name: "spinach",
    category: "produce",
  }, {
    name: "tomatillo",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "cilantro",
    category: "produce",
  }, {
    name: "cumin",
    category: "misc",
  }, {
    name: "egg",
    category: "dairy",
  }],
}, {
  name: "打卤面",
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "Chinese noodles",
    category: "misc",
  }, {
    name: "白胡椒",
    category: "misc",
  }, {
    name: "麻油",
    category: "misc",
  }, {
    name: "egg",
    category: "dairy",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "carrot",
    category: "produce",
  }, {
    name: "木耳(雲)",
    category: "misc",
  }, {
    name: "chicken bouillon",
    category: "misc",
  }, {
    name: "soy sauce",
    category: "misc",
  }, {
    name: "oyster sauce",
    category: "misc",
  }, {
    name: "sugar",
    category: "misc",
  }, {
    name: "scallions",
    category: "produce",
  }],
}, {
  name: "芋头面包",
  cuisine: "chinese",
  meal: "breakfast",
  ingredientList: [{
    name: "芋头面包",
    category: "chinese bakery",
  },],
}, {
  name: "豆沙面包",
  cuisine: "chinese",
  meal: "breakfast",
  ingredientList: [{
    name: "豆沙面包",
    category: "chinese bakery",
  },],
}, {
  name: "fruit loops",
  cuisine: "american",
  meal: "breakfast",
  ingredientList: [{
    name: "fruit loops",
    category: "aisle",
  }, {
    name: "milk",
    category: "dairy",
  },],
}, {
  name: "omelette",
  cuisine: "american",
  meal: "breakfast",
  ingredientList: [{
    name: "egg",
    category: "dairy",
  }, {
    name: "bell pepper",
    category: "produce",
  },],
}, {
  name: "卤肉饭",
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "pork",
    category: "meat",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "fried shallot",
    category: "aisle",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "米酒",
    category: "aisle",
  }, {
    name: "冰糖",
    category: "aisle",
  }, {
    name: "酸菜",
    category: "aisle",
  },],
}, {
  name: "ginger pork belly",
  cuisine: "chinese",
  meal: "dinner",
  ingredientList: [{
    name: "pork belly",
    category: "meat",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "sugar",
    category: "aisle",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "scallion",
    category: "produce",
  },],
}, {
  name: "miso salmon",
  cuisine: "japanese",
  meal: "dinner",
  ingredientList: [{
    name: "salmon",
    category: "meat",
  }, {
    name: "white miso paste",
    category: "aisle",
  }, {
    name: "sesame oil",
    category: "aisle",
  }, {
    name: "mirin",
    category: "aisle",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "sugar",
    category: "aisle",
  }, {
    name: "seasame seeds",
    category: "aisle",
  }],
}, {
  name: "garlic butter noodles",
  cuisine: "misc",
  meal: "dinner",
  ingredientList: [{
    name: "pasta",
    category: "aisle",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "soy sauce",
    category: "aisle",
  }, {
    name: "oyster sauce",
    category: "aisle",
  }, {
    name: "brown sugar",
    category: "aisle",
  }, {
    name: "sesame oil",
    category: "aisle",
  }, {
    name: "scallion",
    category: "produce",
  }, {
    name: "parmesan",
    category: "dairy",
  }],
}, {
  name: "butter chicken",
  cuisine: "indian",
  meal: "dinner",
  ingredientList: [{
    name: "chicken",
    category: "meat",
  }, {
    name: "butter",
    category: "dairy",
  }, {
    name: "garlic",
    category: "produce",
  }, {
    name: "ginger",
    category: "produce",
  }, {
    name: "brown sugar",
    category: "aisle",
  }, {
    name: "red chili powder",
    category: "aisle",
  }, {
    name: "garam masala",
    category: "aisle",
  }, {
    name: "turmeric",
    category: "aisle",
  }, {
    name: "full fat yogurt",
    category: "dairy",
  }, {
    name: "bay leaves",
    category: "aisle",
  }, {
    name: "can of strained tomato",
    category: "aisle",
  }],
}, {
  name: "cheesy chicken burrito",
  cuisine: "mexican",
  meal: "dinner",
  ingredientList: [{
    name: "chicken",
    category: "meat",
  }, {
    name: "paprika",
    category: "aisle",
  }, {
    name: "oregano",
    category: "aisle",
  }, {
    name: "chili",
    category: "aisle",
  }, {
    name: "onion powder",
    category: "aisle",
  }, {
    name: "garlic powder",
    category: "aisle",
  }, {
    name: "lime juice",
    category: "aisle",
  }, {
    name: "chicken bouillon",
    category: "aisle",
  }, {
    name: "rice",
    category: "aisle",
  }, {
    name: "salsa verde",
    category: "aisle",
  }, {
    name: "tomato",
    category: "produce",
  }, {
    name: "jalapeno",
    category: "produce",
  }, {
    name: "onion",
    category: "produce",
  }, {
    name: "sour cream",
    category: "aisle",
  }, {
    name: "mozzarella cheese",
    category: "dairy",
  },],
}, {
  "name": "tacos al pastor",
  "cuisine": "mexican",
  meal: "dinner",
  "ingredientList": [{
    "name": "guajillo chiles",
    "category": "aisle"
  }, {
    "name": "ancho chiles",
    "category": "aisle"
  }, {
    "name": "pineapple juice",
    "category": "aisle"
  }, {
    "name": "white vinegar",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "white onion",
    "category": "produce"
  }, {
    "name": "achiote paste",
    "category": "aisle"
  }, {
    "name": "oregano",
    "category": "aisle"
  }, {
    "name": "ground cumin",
    "category": "aisle"
  }, {
    "name": "ground black pepper",
    "category": "aisle"
  }, {
    "name": "salt",
    "category": "aisle"
  }, {
    "name": "orange juice",
    "category": "aisle"
  }, {
    "name": "lime juice",
    "category": "aisle"
  }, {
    "name": "pork shoulder",
    "category": "meat"
  }, {
    "name": "corn tortillas",
    "category": "aisle"
  }, {
    "name": "fresh pineapple",
    "category": "produce"
  }, {
    "name": "cilantro",
    "category": "produce"
  }, {
    "name": "lime wedges",
    "category": "produce"
  }]
}, {
  "name": "steak & cheese",
  "cuisine": "american",
  meal: "dinner",
  "ingredientList": [{
    "name": "ribeye steak",
    "category": "meat"
  }, {
    "name": "olive oil",
    "category": "aisle"
  }, {
    "name": "salt",
    "category": "aisle"
  }, {
    "name": "black pepper",
    "category": "aisle"
  }, {
    "name": "provolone cheese",
    "category": "dairy"
  }, {
    "name": "onion",
    "category": "produce"
  }, {
    "name": "green bell pepper",
    "category": "produce"
  }, {
    "name": "hoagie rolls",
    "category": "bakery"
  }, {
    "name": "butter",
    "category": "dairy"
  }]
}, {
  "name": "麻婆豆腐",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "firm tofu",
    "category": "produce"
  }, {
    "name": "ground pork",
    "category": "meat"
  }, {
    "name": "vegetable oil",
    "category": "aisle"
  }, {
    "name": "doubanjiang (fermented broad bean paste)",
    "category": "aisle"
  }, {
    "name": "douchi (fermented black beans)",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "green onions",
    "category": "produce"
  }, {
    "name": "Sichuan peppercorns",
    "category": "aisle"
  }, {
    "name": "chicken broth",
    "category": "aisle"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "cornstarch",
    "category": "aisle"
  }, {
    "name": "sugar",
    "category": "aisle"
  }]
}, {
  "name": "公保机",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "chicken breast",
    "category": "meat"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "hoisin sauce",
    "category": "aisle"
  }, {
    "name": "rice vinegar",
    "category": "aisle"
  }, {
    "name": "cornstarch",
    "category": "aisle"
  }, {
    "name": "sesame oil",
    "category": "aisle"
  }, {
    "name": "vegetable oil",
    "category": "aisle"
  }, {
    "name": "dried red chilies",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "green onions",
    "category": "produce"
  }, {
    "name": "bell pepper",
    "category": "produce"
  }, {
    "name": "peanuts",
    "category": "aisle"
  }, {
    "name": "sugar",
    "category": "aisle"
  }]
}, {
  "name": "担担面",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "ground pork",
    "category": "meat"
  }, {
    "name": "wheat noodles",
    "category": "aisle"
  }, {
    "name": "Sichuan peppercorns",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "green onions",
    "category": "produce"
  }, {
    "name": "peanut oil",
    "category": "aisle"
  }, {
    "name": "doubanjiang (fermented broad bean paste)",
    "category": "aisle"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "chicken broth",
    "category": "aisle"
  }, {
    "name": "black vinegar",
    "category": "aisle"
  }, {
    "name": "sesame paste",
    "category": "aisle"
  }, {
    "name": "sugar",
    "category": "aisle"
  }, {
    "name": "sesame oil",
    "category": "aisle"
  }, {
    "name": "bok choy",
    "category": "produce"
  }]
}, {
  "name": "回锅肉",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "pork belly",
    "category": "meat"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "green onions",
    "category": "produce"
  }, {
    "name": "doubanjiang (fermented broad bean paste)",
    "category": "aisle"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "sugar",
    "category": "aisle"
  }, {
    "name": "vegetable oil",
    "category": "aisle"
  }, {
    "name": "rice wine",
    "category": "aisle"
  }, {
    "name": "bell pepper",
    "category": "produce"
  }, {
    "name": "cabbage",
    "category": "produce"
  }, {
    "name": "Sichuan peppercorns",
    "category": "aisle"
  }]
}, {
  "name": "teriyaki chicken",
  "cuisine": "japanese",
  meal: "dinner",
  "ingredientList": [{
    "name": "chicken thighs",
    "category": "meat"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "mirin",
    "category": "aisle"
  }, {
    "name": "sake",
    "category": "aisle"
  }, {
    "name": "sugar",
    "category": "aisle"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "green onions",
    "category": "produce"
  }, {
    "name": "sesame seeds",
    "category": "aisle"
  }, {
    "name": "vegetable oil",
    "category": "aisle"
  }]
}, {
  "name": "chicken parmesan pasta",
  "cuisine": "american",
  meal: "dinner",
  "ingredientList": [{
    "name": "chicken breast",
    "category": "meat"
  }, {
    "name": "canned crushed tomato",
    "category": "aisle"
  }, {
    "name": "salt",
    "category": "aisle"
  }, {
    "name": "black pepper",
    "category": "aisle"
  }, {
    "name": "onion powder",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "dried basil",
    "category": "aisle"
  }, {
    "name": "dried oregano",
    "category": "aisle"
  }, {
    "name": "chili flakes",
    "category": "aisle"
  }, {
    "name": "pasta",
    "category": "aisle"
  }, {
    "name": "basil",
    "category": "produce"
  }, {
    "name": "olive oil",
    "category": "aisle"
  }]
}, {
  "name": "sesame chicken",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "chicken breast",
    "category": "meat"
  }, {
    "name": "cornstarch",
    "category": "aisle"
  }, {
    "name": "soy sauce",
    "category": "aisle"
  }, {
    "name": "rice vinegar",
    "category": "aisle"
  }, {
    "name": "honey",
    "category": "aisle"
  }, {
    "name": "brown sugar",
    "category": "produce"
  }, {
    "name": "sesame oil",
    "category": "aisle"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "ginger",
    "category": "produce"
  }, {
    "name": "white sesame seeds",
    "category": "aisle"
  }, {
    "name": "scallion",
    "category": "produce"
  },]
}, {
  "name": "椒盐虾",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "shrimp",
    "category": "meat"
  }, {
    "name": "cornstarch",
    "category": "aisle"
  }, {
    "name": "salt",
    "category": "aisle"
  }, {
    "name": "white pepper",
    "category": "aisle"
  }, {
    "name": "black pepper",
    "category": "aisle"
  }, {
    "name": "五香粉",
    "category": "aisle"
  }, {
    "name": "green bell pepper",
    "category": "produce"
  }, {
    "name": "red bell pepper",
    "category": "produce"
  }, {
    "name": "garlic",
    "category": "produce"
  }, {
    "name": "scallion",
    "category": "produce"
  }, {
    "name": "red chilies",
    "category": "produce"
  }, {
    "name": "sugar",
    "category": "produce"
  },]
}, {
  "name": "Mac N Cheese",
  "cuisine": "american",
  meal: "dinner",
  "ingredientList": [{
    "name": "pasta (elbows)",
    "category": "aisle"
  }, {
    "name": "gruyere cheese",
    "category": "dairy"
  }, {
    "name": "mozzarella cheese",
    "category": "dairy"
  },
  ]
}, {
  "name": "Scallion Oil Noodles",
  "cuisine": "chinese",
  meal: "dinner",
  "ingredientList": [{
    "name": "scallion",
    "category": "produce",
  }, {
    "name": "shallot",
    "category": "produce",
  }, {
    "name": "soy sauce",
    "category": "produce",
  }, {
    "name": "oyster sauce",
    "category": "produce",
  }, {
    "name": "sugar",
    "category": "produce",
  }, {
    "name": "noodle",
    "category": "produce",
  }, {
    "name": "egg",
    "category": "dairy",
  }, ]
}
].map((curr: any) => {
  // add default values
  return {
    name: "",
    cuisine: "",
    ingredientList: [],
    meal: "dinner",
    ...curr,
  }
})