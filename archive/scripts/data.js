/**
 * MONGODOB manages id, createdAt, updatedAt for me
 */
export const cookingHistoryList = [
  {
    thumbnail: 'gyoza.jpg',
    name: 'gyoza / 煎饺',
    ingredients: ['water', 'flour', 'pork', 'garlic chives', 'scallions', 'garlic', 'ginger', 'soy sauce', 'sesame oil'],
    isOrdered: 'true',
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
          "ty parents for helping",
          "Dough was a great texture",
        ],
        conList: [
          "Dough - flatten each wrapper more ",
          "Filling - use fatty pork OR add water three times (打水)",
          "Filling - harvest garlic chives from our garden outside ",
          "Frying - add extra oil to prevent bottom from sticking",
        ]
      }
    ],
  },
  {
    name: 'cilantro lime rice',
    ingredients: ['rice', 'lime', 'cilantro'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-19',
        proList: [],
        conList: [
          "cut cilantro smaller",
          "add more lime to rice"
        ]
      }
    ],
  },
  {
    name: 'pico de gallo',
    ingredients: ['tomato', 'onion', 'cilantro', 'lime'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-19',
        proList: [],
        conList: []
      }
    ],
  },
  {
    name: 'guacamole',
    ingredients: ['avocado', 'tomato', 'onion', 'lime'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-19',
        proList: [],
        conList: []
      }
    ],
  },
  {
    name: 'mexican chicken',
    ingredients: ['chicken', 'cumin', 'salt', 'black pepper'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-19',
        proList: [],
        conList: []
      }
    ],
  },
  {
    name: 'dashimaki tamago',
    ingredients: ['egg', 'dashi', 'mirin', 'sugar', 'soy sauce', 'rice wine'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [],
        conList: [
          "frying - roll egg with both chopsticks and wrist flick (first fold sides in)",
          "batter - increase portion size",
          "taste - add more sugar",
          "taste - add extra kombu/bonito to dashi",
        ]
      }
    ],
  },
  {
    name: 'kombu tsukudani',
    ingredients: ['kombu', 'mirin', 'sugar', 'rice wine'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
          'taste - sweet flavor from mirin/sugar is great'
        ],
        conList: [
          'boiling - takes super long since 20 min minimum to let flavor soak in',
          'cut - hard to cut since it\'s sticky. Need a sharper knife'
        ]
      }
    ],
  },
  {
    name: 'salad burrito',
    ingredients: ['tortilla', 'salad', 'hummus', 'balsamic', 'feta cheese'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
        ],
        conList: [
          'wrapping - buy bigger tortillas - as tortilla size increases, filling amount multiplies',
          'temperature - best enjoyed fresh off the pan since outside tortilla is hot while inside is cold and tortilla is crunchy'
        ]
      }
    ],
  },
  {
    name: 'ramen',
    ingredients: ['tortilla', 'salad', 'hummus', 'balsamic', 'feta cheese'],
    isOrdered: false,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
        ],
        conList: [
          'wrapping - buy bigger tortillas - as tortilla size increases, filling amount multiplies',
          'temperature - best enjoyed fresh off the pan since outside tortilla is hot while inside is cold and tortilla is crunchy'
        ]
      }
    ],
  },
]

/*
COOKING RESULTS

Mexican Food
- Cilantro Lime Rice
- Pico de Gallo - add salt
- Guacamole
- Chicken with Chipotle Peppers in Adobo 
- Pinto Beans 
- Corn
- lettuce 
- Cheddar + Monterey Jack
=> beans were a complete disaster since they weren't soft enough nor flavorful enough (missing fat? I added butter tho and chicken stock).

Kimchi spaghetti - shrimp scampi + red pepper flakes + butter + kimchi

- Curry - onion, potatoes, carrots, apple, chicken, curry cubes (vermont + curry), garlic, ginger

- banana bread, oatmeal, egg, prosciutto, banana
- milk

- Fancy Bagel - sesame bagel, prosciutto, egg, tomato, mozzarella cheese, provolone
- Spinach
- Potatoes


Tonkatsu
- pork shoulder
- salt/pepper 
- flour
- egg
- panko
Cabbage

Omelette rice
- egg - dashi, soy sauce, mirin, cooking sake, egg
- rice - onion, carrots, mixed veggies, chicken stock, butter, ketchup


  {
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    thumbnail: 'gyoza.jpg',
    name: 'gyoza / 煎饺',
    ingredients: ['dough', 'dough', 'dough', 'dough', 'dough', 'dough', 'dough'],
    isOrdered: 'true',
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
          "parents helped",
          "dough was good",
        ],
        conList: [
          "Filling - need to add water (打水, have to do it 3 times) OR use fatty pork",
          "Harvest garlic chives from our garden outside ",
          "Make wrapper flatter ",
          "when pan frying, make sure to add extra oil so the bottom doesn't stick",
        ]
      }
    ],
  },


Cilantro Lime Rice
- cut cilantro smaller
- add more lime to Rice 

Lime Cilantro Rice
Pico de Gallo
Guacamole
Chicken Thigh
Canned corn

- cook: stir fried vegetables => DONE, careful on too much water since I've added cooking wine already
- cook: dashimaki tamago => DONE, dashi not strong enough, super hard to roll the egg since u need enough at the bottom and to swing to flip it but then it might stick 
- cook: kombu tsukudani => DONE, kombu really hard to cut, sweet flavor is good but prob need extra different one

---
salad burrito - fetacheese
crazy good when toasting tortillas (and melted feat inside)


RAMEN TAKEAWAYS
- tons of ingredients, I should make multiple bags and keep multiple going at once to make everything


SUCCESS
Okyakodon - dashi, soy sauce, cooking sake, mirin, sugar, chicken, onions, scallions, egg
- When I did it a second time, I stir fried the chicken and added a little bit of soy sauce. I need to be careful with how long I cook it so the meat flavor does not go out into the sauce.

Okonomiyaki - pork belly or other pork, water, flour, cabbage, scallions, frozen shrimp, frozen vegetables, fresh yakisoba noodles, Okonomiyaki sauce (or ketchup + worcestershire + sugar), Kewpie Mayo, Bonito Flakes, scallions garnish

Sundubu - oil, onion, garlic, pork belly, kimchi, stock (dried anchovies, dried kelp (and 30 min)) , salt/sugar, soft tofu, hot pepper mixture (gochugaru, sesame oil), egg, scallions
  - need stock for good umami flavor instead of just chicken bouillon
  - https://www.maangchi.com/recipe/sundubu-jjigae

Tonkatsu Curry Rice
- curry - java spicy curry, Vermont mild curry, chicken, carrots, potatoes, water
- katsu - pork loin, flour, egg, panko, (tonkatsu sauce)

Miso Soup - red dashi powder, chicken bouillon, silken tofu, bonito flakes, wakame, red miso

麻婆豆腐 - pork shredded, silken tofu, 豆瓣酱, 蒜蓉辣椒酱 (or pepper), garlic, ginger

京酱肉丝 - pork slices, 甜面酱, scallions, garlic, ginger 

甘いじゃが芋 - potatoes, soy sauce, sugar, mirin, water

banana bread - bananas, butter, baking soda, salt, sugar, egg, vanilla extract, flour

FAILED
Gyoza
- Filling - need to add water (打水, have to do it 3 times) OR use fatty pork
- Harvest garlic chives from our garden outside 
- Make wrapper flatter 
- when pan frying, make sure to add extra oil so the bottom doesn't stick
Pita Bread
- cut the bread along the middle so I can actually put thigns
- heat up the bread to make it more pliable
Salad Burrito
- heat up the tortilla to make it more pliable
- buy bigger tortillas to make actual burrito (or pack less food to fit it in)
Spaghetti
- did not add enough sauce
- sun dried tomatoes were not cut small enough (need to dice them instead of into slices)
Hamburg Steak - steak - carrots, onions, shiitake mushrooms, panko, milk, meat mixture (beef + pork), nutmeg, flour, red wine (or red wine vinegar), ketchup, worcestershire sauce, honey, butter, cherry tomatoes, mushrooms
- dice mushrooms and carrots smaller (takes more time but worth)
- need more panko soaked in soy milk 
- careful with the sauce (added too much honey), add less and then more based on the flavor. Also, buy bigger bottles of red wine since 700 mL is more than 2 cups.
- too much portion size (got 2 lb of beef, I only need like 1/2 lb max

Banana Bread - bananas, butter, baking soda, salt, sugar, egg, vanilla extract, flour
- need 3 bananas

Green Shakshukas - garlic, onions, tomatillo, canned pinto beans, spices (cumin, chipotle, coriander seeds), frozen spinach, eggs, tortilla chips, salsa
- tomatillos are sour so I had to add sugar to mitigate my Chinese spinach, tomatillo, lime mixture
- cilantro does not blend well at all

Yam Tempura
- yams too wet and not soft + flour not much flavor => bake yams before `frying
- peeling yams is smart and water + egg + flour coating was super easy to make

Classic Chili
- beans had no flavor (need to cook them separate and then add in)
- soup was good - chili powder, cumin, oregano, basil, salt, pepper, butter
- meat was pretty good - soy sauce, corn starch, salt, pepper

Dan Dan Mian
- chili oil - bought wrong chili pepper flakes for chili oil (next time buy chili oil?)
- noodles are good with sesame oil
*/

/*
COOKING BACKLOG
Karaage, pulmuone

Cheese croquette

Mushroom Risotto
- olive oil
- mushroom
- parsley
- salt/pepper
- onions
- garlic
- white wine
- cannoli rice
- chicken stock
- Parmesan 
- butter


- learn to cook: cheese croquette - https://m.youtube.com/watch?v=YFdjoz6VzF8&pp=ygUoY2hlZXNlIGNyb3F1ZXR0ZXMgcmVjaXBlIGNoYW5wIEphcGFuZXNlIA%3D%3D  
- learn to cook: potato croquette - https://m.youtube.com/watch?v=b7iRqqubcy4

QUEUE
- risotto
- cheese croquette
- sushi
- Korean sweet soy glazed potatoes 

Backlog
- kiritanpo
- taranko
- tonakiyaji
- Grilled Octopus + green garlic sauce
- salisbury steak
- pot au feu
- Korean Galbi
- mentaiko pasta
- tenderloin cut wrapped in pastry wellington style
- monjyayaki
- Noriben
- Beef Noodle Soup 牛肉面
- cafe Mami sweet carrots
- Taiwanese Oyster Omelette (蠔烙煎) 
- yakitori
- paella
- jambalaya
- Shitake mushroom
- Dumplings 水饺
- Oatmeal Raisin Cookies
- Dango (mitarashi, sanshoku)
- Ramen ラメン
- Karaage 唐揚げ
- Omelette Rice
- Taiyaki 鯛焼き
- Egg Fried Rice 蛋炒饭
- Korean Dan Dan Mian
- Oatmeal Banana Bread  - bananas (https://www.youtube.com/shorts/HAfo4-k7Cp8)
- wonton soup
- bruschetta - French bread, garlic, olive oil, salt, tomato, fresh mozzarella, honey ham 
- 卤肉饭
- 地瓜稀饭
- Panzanella (Italian Bread Salad) - cubed, hardened bread, tomatoes, cucumbers, onions, peppers, basil, olive oil, red wine vinegar, salt, and pepper.
- fish tacos
- Miso Tamago
- chilaquiles
- Hunan Beef - https://www.youtube.com/watch?v=w1XuKyQ9lRI
- doner kebab
- Shawarma 
- swedish meatballs 
- Kimchi Spaghetti - spaghetti, nori sheets, eggs, 
- Pomodoro spaghetti and meatballs
- Teriyaki Chicken
- gnocchi pasta - Gnocchi, sausage, red pepper, garlic, broccoli, Parmesan 
- Sichuan style rice noodles - https://youtube.com/shorts/8t0Ddy8QQTE?feature=share 
- Joloff Rice
- Pupusa
- Nasi Goreng (Indonesia fried rice)
- Ful Medames
- Baleadas
- Fried rice
- Chili Oil - oil, chili flakes, garlic, onion, ginger, Sichuan peppercorn, paprika
- Mongolian Beef - https://thewoksoflife.com/mongolian-beef-recipe/
- Sukiyaki
- Huevos Rancheros - tortillas, bell peppers, jalapenos, eggs, tomatoes, onions, canned beans, Monterey jack cheese 
- Smash burger - onions, tomatoes, lettuce, American cheese, ground beef, ketchup, Mayonnaise, hot sauce, pickles, burger buns, salt, pepper
- Butter chicken - yogurt, chicken thighs, garam marsala, smoked paprika, cayenne pepper, salt, garlic, ginger, butter, onions, canned tomatoes , cream
- Malai Kofta
- Refried beans - oregano, actual beans, serrano pepper, onions, garlic,  chipotle powder, lard, queso fresco
- stir fried noodles
- Chicken parmesan
- Spaghetti con vongole
- Seaweed fritters
- Mac n Cheese - macaroni, bread crumbs, shredded cheddar cheese 
  - Bechamel sauce - butter, flour, milk
- Adobo
- Ube
- Balut 
- Yakisoba
- 铁锅炖大鹅
- YOOK BANG - pancake by adding flour to preserved turnip roles, chinese sausage, water chesnuts with soy sauce, salt, sesame oil, (& msg)
- beef rendang
- trancam (salad)
- zongzi
- youfan
- rice-stuffed chicken soup
- 饭团
- 汤圆
- purple rice congee.
- 年糕 
- noriben
- boko boko harees
- frango piri piri
- hamam mahsi

Iced
- Goulash => I don't like paprika?
- KWOOK chickpeas dish - canned chickpeas, sourdough bread, olive oil, garlic, spices (basil, oregano, cumin, cayenne red pepper, chili powder?), cilantro, red chili slices, lemon, greek yogurt => no chickpeas 
- Buta Kakuni (pork stew)
- Takoyaki - octopus, cabbage, green onion (leeks?), bonito flake, scallions, Kewp mayonnaise, Okonomiyaki sauce (Worcestershire + Ketchup substitute if needed)
  - pan fry in lots of oil
  - grill at end with George Foreman grill for crispy exterior
  - (liquid batter and we have no shaped takoyaki grill)
*/