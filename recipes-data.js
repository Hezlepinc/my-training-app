/* recipes-data.js — structured ingredient data for the weekly meal planner.
 * Single source of truth for shoppable quantities. Used by meal-plan-list.html.
 * staple:true  => grouped under "You likely already have" (pantry items)
 * store        => 'costco' | 'publix' | 'amazon' (matches the by-store list)
 * Item names are kept CONSISTENT across recipes so duplicates merge & sum.
 */
window.RECIPES = {

  "almond-flour-pancakes": { name: "Almond Flour Pancakes", ingredients: [
    { item: "Almond flour", qty: 1, unit: "cup", store: "costco" },
    { item: "Eggs", qty: 4, unit: "", store: "costco" },
    { item: "Heavy whipping cream", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Butter (grass-fed)", qty: 4, unit: "tbsp", store: "costco" },
    { item: "Raspberries/blackberries", qty: 0.25, unit: "cup", store: "publix" },
    { item: "Baking powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Vanilla extract", qty: 1, unit: "tsp", store: "costco", staple: true },
    { item: "Powdered monk fruit/erythritol", qty: 1.5, unit: "tbsp", store: "amazon" },
    { item: "Sea salt", qty: null, unit: "pinch", store: "publix", staple: true }
  ]},

  "savory-chaffles": { name: "Savory Chaffles", ingredients: [
    { item: "Eggs", qty: 1, unit: "", store: "costco" },
    { item: "Mozzarella (block)", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Almond flour", qty: 1, unit: "tbsp", store: "costco" },
    { item: "Garlic powder", qty: 0.25, unit: "tsp", store: "publix", staple: true },
    { item: "Salt", qty: null, unit: "pinch", store: "publix", staple: true }
  ]},

  "fathead-pizza": { name: "Fathead Pizza", ingredients: [
    { item: "Mozzarella (block)", qty: 2.5, unit: "cup", store: "costco" },
    { item: "Cream cheese", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Almond flour", qty: 0.75, unit: "cup", store: "costco" },
    { item: "Eggs", qty: 1, unit: "", store: "costco" },
    { item: "Marinara (no sugar, Rao's)", qty: 0.5, unit: "cup", store: "publix" },
    { item: "Pepperoni (uncured)", qty: 16, unit: "slices", store: "publix" },
    { item: "Italian seasoning", qty: 0.5, unit: "tsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 0.5, unit: "tsp", store: "publix", staple: true },
    { item: "Salt", qty: null, unit: "", store: "publix", staple: true }
  ]},

  "jalapeno-popper-stuffed-chicken": { name: "Jalapeño Popper Stuffed Chicken", ingredients: [
    { item: "Chicken breasts", qty: 4, unit: "(6oz)", store: "costco" },
    { item: "Cream cheese", qty: 4, unit: "oz", store: "costco" },
    { item: "Cheddar (block)", qty: 1, unit: "cup", store: "costco" },
    { item: "Jalapeños", qty: 4, unit: "", store: "publix" },
    { item: "Bacon (sugar-free)", qty: 8, unit: "slices", store: "costco" },
    { item: "Avocado oil", qty: 1, unit: "tbsp", store: "costco", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Salt & pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},

  "creamy-mushroom-chicken": { name: "Creamy Mushroom Chicken", ingredients: [
    { item: "Chicken thighs (bone-in)", qty: 4, unit: "(6oz)", store: "costco" },
    { item: "Mushrooms (cremini)", qty: 8, unit: "oz", store: "publix" },
    { item: "Heavy whipping cream", qty: 1, unit: "cup", store: "costco" },
    { item: "Chicken bone broth", qty: 0.5, unit: "cup", store: "amazon" },
    { item: "Butter (grass-fed)", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Parmesan", qty: 0.25, unit: "cup", store: "costco" },
    { item: "Garlic", qty: 4, unit: "cloves", store: "publix" },
    { item: "Fresh thyme", qty: 1, unit: "small pack", store: "publix" },
    { item: "Avocado oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Salt & pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},

  "pan-seared-salmon-dill-cream": { name: "Pan-Seared Salmon w/ Dill Cream", ingredients: [
    { item: "Salmon fillets (wild)", qty: 2, unit: "(6oz)", store: "costco" },
    { item: "Sour cream", qty: 0.25, unit: "cup", store: "publix" },
    { item: "DIY mayo (or jar)", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Fresh dill", qty: 1, unit: "small bunch", store: "publix" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Garlic", qty: 1, unit: "clove", store: "publix" },
    { item: "Capers", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Avocado oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Salt & pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},

  "shrimp-scampi-zucchini": { name: "Shrimp Scampi w/ Zucchini", ingredients: [
    { item: "Shrimp (large)", qty: 1, unit: "lb", store: "costco" },
    { item: "Zucchini", qty: 2, unit: "", store: "publix" },
    { item: "Butter (grass-fed)", qty: 4, unit: "tbsp", store: "costco" },
    { item: "Garlic", qty: 6, unit: "cloves", store: "publix" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Fresh parsley", qty: 1, unit: "bunch", store: "publix" },
    { item: "Parmesan", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Extra virgin olive oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Red pepper flakes", qty: 0.5, unit: "tsp", store: "publix", staple: true }
  ]},

  "indian-butter-chicken": { name: "Indian Butter Chicken", ingredients: [
    { item: "Chicken thighs (boneless)", qty: 2, unit: "lb", store: "costco" },
    { item: "Greek yogurt (full-fat)", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Heavy whipping cream", qty: 1, unit: "cup", store: "costco" },
    { item: "Tomato paste", qty: 0.5, unit: "cup", store: "publix" },
    { item: "Butter (grass-fed)", qty: 4, unit: "tbsp", store: "costco" },
    { item: "Ghee", qty: 2, unit: "tbsp", store: "publix" },
    { item: "Garlic", qty: 6, unit: "cloves", store: "publix" },
    { item: "Fresh ginger", qty: 1, unit: "knob", store: "publix" },
    { item: "Fresh cilantro", qty: 1, unit: "small bunch", store: "publix" },
    { item: "Garam masala", qty: 2, unit: "tbsp", store: "publix", staple: true },
    { item: "Ground cumin", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Paprika", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Turmeric", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "crispy-chicken-thighs": { name: "Crispy Chicken Thighs", ingredients: [
    { item: "Chicken thighs (bone-in)", qty: 8, unit: "", store: "costco" },
    { item: "Sour cream", qty: 0.5, unit: "cup", store: "publix" },
    { item: "DIY mayo (or jar)", qty: 2, unit: "tbsp", store: "costco" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Fresh chives/dill", qty: 1, unit: "small bunch", store: "publix" },
    { item: "Garlic", qty: 1, unit: "clove", store: "publix" },
    { item: "Avocado oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Smoked paprika", qty: 2, unit: "tsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Onion powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Dried thyme", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "crack-chicken": { name: "Crack Chicken (slow cooker)", ingredients: [
    { item: "Chicken breasts", qty: 2, unit: "lb", store: "costco" },
    { item: "Cream cheese", qty: 8, unit: "oz", store: "costco" },
    { item: "Chicken bone broth", qty: 1, unit: "cup", store: "amazon" },
    { item: "Bacon (sugar-free)", qty: 8, unit: "slices", store: "costco" },
    { item: "Cheddar (block)", qty: 1, unit: "cup", store: "costco" },
    { item: "Green onions", qty: 1, unit: "bunch", store: "publix" },
    { item: "Dried parsley", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Dried dill", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Dried chives", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Onion powder", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "bacon-cheeseburger-casserole": { name: "Bacon Cheeseburger Casserole", ingredients: [
    { item: "Ground beef (80/20)", qty: 2, unit: "lb", store: "costco" },
    { item: "Bacon (sugar-free)", qty: 8, unit: "slices", store: "costco" },
    { item: "Yellow onion", qty: 0.5, unit: "", store: "publix" },
    { item: "Cream cheese", qty: 4, unit: "oz", store: "costco" },
    { item: "DIY ketchup (or Primal jar)", qty: 0.25, unit: "cup", store: "publix" },
    { item: "Yellow mustard", qty: 2, unit: "tbsp", store: "publix" },
    { item: "Worcestershire sauce", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Eggs", qty: 4, unit: "", store: "costco" },
    { item: "Heavy whipping cream", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Cheddar (block)", qty: 2, unit: "cup", store: "costco" },
    { item: "Pickles / lettuce / tomato (garnish)", qty: 1, unit: "to taste", store: "publix" },
    { item: "Garlic powder, salt, pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},

  "egg-roll-in-a-bowl": { name: "Egg Roll in a Bowl", ingredients: [
    { item: "Ground pork", qty: 1, unit: "lb", store: "publix" },
    { item: "Coleslaw mix", qty: 1, unit: "(14oz) bag", store: "publix" },
    { item: "Garlic", qty: 4, unit: "cloves", store: "publix" },
    { item: "Fresh ginger", qty: 1, unit: "knob", store: "publix" },
    { item: "Green onions", qty: 3, unit: "", store: "publix" },
    { item: "Coconut aminos", qty: 2, unit: "tbsp", store: "amazon" },
    { item: "Rice vinegar (unseasoned)", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Sesame oil (toasted)", qty: 2, unit: "tbsp", store: "publix", staple: true },
    { item: "Avocado oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Sesame seeds", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Red pepper flakes", qty: 0.5, unit: "tsp", store: "publix", staple: true }
  ]},

  "keto-beef-bulgogi": { name: "Keto Beef Bulgogi", ingredients: [
    { item: "Ribeye (thin sliced)", qty: 1.5, unit: "lb", store: "costco" },
    { item: "Coconut aminos", qty: 0.25, unit: "cup", store: "amazon" },
    { item: "Sesame oil (toasted)", qty: 2, unit: "tbsp", store: "publix", staple: true },
    { item: "Golden monk fruit", qty: 2, unit: "tbsp", store: "amazon" },
    { item: "Garlic", qty: 6, unit: "cloves", store: "publix" },
    { item: "Fresh ginger", qty: 1, unit: "knob", store: "publix" },
    { item: "Green onions", qty: 2, unit: "", store: "publix" },
    { item: "Rice vinegar (unseasoned)", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Sesame seeds", qty: 2, unit: "tbsp", store: "publix", staple: true },
    { item: "Avocado oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Red pepper flakes (gochugaru)", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "chocolate-cheesecake-fat-bombs": { name: "Chocolate Cheesecake Fat Bombs", ingredients: [
    { item: "Cream cheese", qty: 8, unit: "oz", store: "costco" },
    { item: "Butter (grass-fed)", qty: 4, unit: "tbsp", store: "costco" },
    { item: "Cocoa powder (unsweetened)", qty: 0.25, unit: "cup", store: "publix" },
    { item: "Powdered monk fruit/erythritol", qty: 0.5, unit: "cup", store: "amazon" },
    { item: "Heavy whipping cream", qty: 0.25, unit: "cup", store: "costco" },
    { item: "Vanilla extract", qty: 1, unit: "tsp", store: "costco", staple: true },
    { item: "Sea salt", qty: null, unit: "pinch", store: "publix", staple: true }
  ]},

  "keto-mayo": { name: "DIY Keto Mayo", ingredients: [
    { item: "Eggs", qty: 1, unit: "", store: "costco" },
    { item: "Avocado oil", qty: 1, unit: "cup", store: "costco", staple: true },
    { item: "Dijon mustard", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Apple cider vinegar", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Salt", qty: 0.5, unit: "tsp", store: "publix", staple: true }
  ]},

  "keto-ketchup": { name: "DIY Keto Ketchup", ingredients: [
    { item: "Tomato paste", qty: 6, unit: "oz", store: "publix" },
    { item: "Apple cider vinegar", qty: 3, unit: "tbsp", store: "publix", staple: true },
    { item: "Powdered monk fruit/erythritol", qty: 1.5, unit: "tbsp", store: "amazon" },
    { item: "Ground allspice", qty: 0.25, unit: "tsp", store: "publix", staple: true },
    { item: "Ground cloves", qty: null, unit: "pinch", store: "publix", staple: true },
    { item: "Onion powder", qty: 0.5, unit: "tsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 0.5, unit: "tsp", store: "publix", staple: true },
    { item: "Salt", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "ranch-dressing": { name: "Ranch Dressing", ingredients: [
    { item: "DIY mayo (or jar)", qty: 1, unit: "cup", store: "costco" },
    { item: "Sour cream", qty: 0.5, unit: "cup", store: "publix" },
    { item: "Heavy whipping cream", qty: 0.25, unit: "cup", store: "costco" },
    { item: "Apple cider vinegar", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Dried parsley", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Dried dill", qty: 1.5, unit: "tsp", store: "publix", staple: true },
    { item: "Dried chives", qty: 1, unit: "tbsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Onion powder", qty: 1, unit: "tsp", store: "publix", staple: true }
  ]},

  "caesar-dressing": { name: "Caesar Dressing", ingredients: [
    { item: "Eggs", qty: 1, unit: "", store: "costco" },
    { item: "Avocado oil", qty: 1, unit: "cup", store: "costco", staple: true },
    { item: "Anchovy paste", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Garlic", qty: 4, unit: "cloves", store: "publix" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Dijon mustard", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Worcestershire sauce", qty: 1, unit: "tsp", store: "publix" },
    { item: "Parmesan", qty: 0.33, unit: "cup", store: "costco" },
    { item: "Black pepper", qty: 0.5, unit: "tsp", store: "publix", staple: true }
  ]},

  "bbq-sauce": { name: "Keto BBQ Sauce", ingredients: [
    { item: "Tomato paste", qty: 6, unit: "oz", store: "publix" },
    { item: "Apple cider vinegar", qty: 3, unit: "tbsp", store: "publix", staple: true },
    { item: "Worcestershire sauce", qty: 2, unit: "tbsp", store: "publix" },
    { item: "Golden monk fruit", qty: 2, unit: "tbsp", store: "amazon" },
    { item: "Smoked paprika", qty: 1.5, unit: "tsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Onion powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Ground mustard", qty: 0.25, unit: "tsp", store: "publix", staple: true }
  ]},

  // ===== MORE KETO MEALS (round out to 20) =====
  "keto-cobb-salad": { name: "Keto Cobb Salad", ingredients:[{item:"Chicken breasts",qty:1,unit:"(8oz)",store:"costco"},{item:"Bacon (sugar-free)",qty:3,unit:"slices",store:"costco"},{item:"Eggs",qty:2,unit:"",store:"costco"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Blue cheese",qty:0.25,unit:"cup",store:"publix"},{item:"Romaine",qty:3,unit:"cups",store:"publix"}] },
  "keto-philly-cheesesteak-bowl": { name: "Philly Cheesesteak Bowl", ingredients:[{item:"Ribeye (thin sliced)",qty:0.5,unit:"lb",store:"costco"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Yellow onion",qty:0.5,unit:"",store:"publix"},{item:"Provolone",qty:2,unit:"slices",store:"publix"},{item:"Avocado oil",qty:1,unit:"tbsp",store:"costco",staple:true}] },
  "keto-tuna-stuffed-avocado": { name: "Tuna-Stuffed Avocado", ingredients:[{item:"Canned tuna",qty:1,unit:"can",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"DIY mayo (or jar)",qty:2,unit:"tbsp",store:"costco"},{item:"Celery",qty:1,unit:"stalk",store:"publix"},{item:"Lemon",qty:0.5,unit:"",store:"publix"}] },
  "keto-garlic-butter-steak-bites": { name: "Garlic Butter Steak Bites", ingredients:[{item:"Sirloin steak",qty:0.75,unit:"lb",store:"costco"},{item:"Butter (grass-fed)",qty:3,unit:"tbsp",store:"costco"},{item:"Garlic",qty:4,unit:"cloves",store:"publix"},{item:"Fresh parsley",qty:1,unit:"small bunch",store:"publix"}] },
  "keto-sausage-peppers": { name: "Sausage & Peppers", ingredients:[{item:"Italian sausage",qty:4,unit:"links",store:"publix"},{item:"Bell peppers",qty:2,unit:"",store:"publix"},{item:"Yellow onion",qty:1,unit:"",store:"publix"},{item:"Marinara (no sugar, Rao's)",qty:0.5,unit:"cup",store:"publix"}] },
  "keto-chicken-alfredo-zoodles": { name: "Chicken Alfredo Zoodles", ingredients:[{item:"Chicken breasts",qty:1,unit:"(8oz)",store:"costco"},{item:"Zucchini",qty:2,unit:"",store:"publix"},{item:"Heavy whipping cream",qty:0.5,unit:"cup",store:"costco"},{item:"Parmesan",qty:0.33,unit:"cup",store:"costco"},{item:"Butter (grass-fed)",qty:2,unit:"tbsp",store:"costco"}] },

  // ===== PALEO MEALS (no dairy / grains / legumes) =====
  "paleo-grilled-chicken-veggies": { name:"Grilled Chicken & Veggies", ingredients:[{item:"Chicken breasts",qty:2,unit:"(6oz)",store:"costco"},{item:"Zucchini",qty:1,unit:"",store:"publix"},{item:"Bell peppers",qty:2,unit:"",store:"publix"},{item:"Olive oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },
  "paleo-beef-chili": { name:"Paleo Beef Chili (no beans)", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"},{item:"Yellow onion",qty:1,unit:"",store:"publix"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Chili powder",qty:2,unit:"tbsp",store:"publix",staple:true}] },
  "paleo-salmon-asparagus": { name:"Salmon & Asparagus", ingredients:[{item:"Salmon fillets (wild)",qty:2,unit:"(6oz)",store:"costco"},{item:"Asparagus",qty:1,unit:"bunch",store:"publix"},{item:"Lemon",qty:1,unit:"",store:"publix"},{item:"Olive oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },
  "paleo-shrimp-stir-fry": { name:"Shrimp Stir-Fry", ingredients:[{item:"Shrimp (large)",qty:1,unit:"lb",store:"costco"},{item:"Broccoli",qty:2,unit:"cups",store:"publix"},{item:"Coconut aminos",qty:3,unit:"tbsp",store:"amazon"},{item:"Fresh ginger",qty:1,unit:"knob",store:"publix"},{item:"Garlic",qty:3,unit:"cloves",store:"publix"}] },
  "paleo-pork-carnitas": { name:"Pork Carnitas", ingredients:[{item:"Pork shoulder",qty:2,unit:"lb",store:"costco"},{item:"Orange",qty:1,unit:"",store:"publix"},{item:"Lime",qty:2,unit:"",store:"publix"},{item:"Ground cumin",qty:1,unit:"tbsp",store:"publix",staple:true}] },
  "paleo-meatballs-marinara": { name:"Paleo Meatballs & Marinara", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Almond flour",qty:0.25,unit:"cup",store:"costco"},{item:"Eggs",qty:1,unit:"",store:"costco"},{item:"Marinara (no sugar, Rao's)",qty:1,unit:"cup",store:"publix"}] },
  "paleo-chicken-lettuce-wraps": { name:"Chicken Lettuce Wraps", ingredients:[{item:"Ground chicken",qty:1,unit:"lb",store:"publix"},{item:"Butter lettuce",qty:1,unit:"head",store:"publix"},{item:"Coconut aminos",qty:2,unit:"tbsp",store:"amazon"},{item:"Water chestnuts",qty:1,unit:"can",store:"publix"},{item:"Green onions",qty:3,unit:"",store:"publix"}] },
  "paleo-steak-sweet-potato": { name:"Steak & Sweet Potato", ingredients:[{item:"Sirloin steak",qty:2,unit:"(6oz)",store:"costco"},{item:"Sweet potato",qty:2,unit:"",store:"publix"},{item:"Olive oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },
  "paleo-turkey-hash": { name:"Turkey Sweet-Potato Hash", ingredients:[{item:"Ground turkey",qty:1,unit:"lb",store:"publix"},{item:"Sweet potato",qty:1,unit:"",store:"publix"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Eggs",qty:2,unit:"",store:"costco"}] },
  "paleo-egg-muffins": { name:"Veggie Egg Muffins", ingredients:[{item:"Eggs",qty:8,unit:"",store:"costco"},{item:"Spinach",qty:2,unit:"cups",store:"publix"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Bacon (sugar-free)",qty:4,unit:"slices",store:"costco"}] },
  "paleo-tuna-avocado-salad": { name:"Tuna Avocado Salad", ingredients:[{item:"Canned tuna",qty:2,unit:"cans",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Celery",qty:2,unit:"stalks",store:"publix"},{item:"Lemon",qty:1,unit:"",store:"publix"}] },
  "paleo-baked-cod-veg": { name:"Baked Cod & Veg", ingredients:[{item:"Cod fillets",qty:2,unit:"(6oz)",store:"costco"},{item:"Green beans",qty:2,unit:"cups",store:"publix"},{item:"Cherry tomatoes",qty:1,unit:"cup",store:"publix"},{item:"Olive oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },
  "paleo-bunless-burger": { name:"Bunless Burger & Salad", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Butter lettuce",qty:1,unit:"head",store:"publix"},{item:"Tomato",qty:1,unit:"",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"}] },
  "paleo-chicken-curry": { name:"Coconut Chicken Curry", ingredients:[{item:"Chicken thighs (boneless)",qty:1.5,unit:"lb",store:"costco"},{item:"Coconut milk (full-fat)",qty:1,unit:"can",store:"publix"},{item:"Curry powder",qty:2,unit:"tbsp",store:"publix",staple:true},{item:"Fresh ginger",qty:1,unit:"knob",store:"publix"},{item:"Garlic",qty:4,unit:"cloves",store:"publix"}] },
  "paleo-sausage-veggie-skillet": { name:"Sausage Veggie Skillet", ingredients:[{item:"Chicken sausage",qty:4,unit:"links",store:"publix"},{item:"Brussels sprouts",qty:2,unit:"cups",store:"publix"},{item:"Sweet potato",qty:1,unit:"",store:"publix"},{item:"Olive oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },
  "paleo-stuffed-peppers": { name:"Cauliflower Stuffed Peppers", ingredients:[{item:"Bell peppers",qty:4,unit:"",store:"publix"},{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Cauliflower rice",qty:2,unit:"cups",store:"publix"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"}] },
  "paleo-beef-stew": { name:"Paleo Beef Stew", ingredients:[{item:"Beef stew meat",qty:1.5,unit:"lb",store:"costco"},{item:"Carrots",qty:3,unit:"",store:"publix"},{item:"Celery",qty:3,unit:"stalks",store:"publix"},{item:"Beef bone broth",qty:2,unit:"cups",store:"amazon"}] },
  "paleo-cobb-salad": { name:"Paleo Cobb Salad", ingredients:[{item:"Chicken breasts",qty:1,unit:"(8oz)",store:"costco"},{item:"Bacon (sugar-free)",qty:3,unit:"slices",store:"costco"},{item:"Eggs",qty:2,unit:"",store:"costco"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Romaine",qty:3,unit:"cups",store:"publix"}] },
  "paleo-zoodle-bolognese": { name:"Zoodle Bolognese", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Zucchini",qty:3,unit:"",store:"publix"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"},{item:"Yellow onion",qty:0.5,unit:"",store:"publix"}] },
  "paleo-banana-almond-pancakes": { name:"Banana Almond Pancakes", ingredients:[{item:"Banana",qty:2,unit:"",store:"publix"},{item:"Eggs",qty:3,unit:"",store:"costco"},{item:"Almond flour",qty:0.5,unit:"cup",store:"costco"},{item:"Coconut oil",qty:2,unit:"tbsp",store:"costco",staple:true}] },

  // ===== STANDARD / BALANCED MEALS =====
  "std-chicken-rice-broccoli": { name:"Chicken, Rice & Broccoli", ingredients:[{item:"Chicken breasts",qty:2,unit:"(6oz)",store:"costco"},{item:"White rice",qty:1,unit:"cup",store:"publix"},{item:"Broccoli",qty:2,unit:"cups",store:"publix"},{item:"Olive oil",qty:1,unit:"tbsp",store:"costco",staple:true}] },
  "std-spaghetti-meat-sauce": { name:"Spaghetti & Meat Sauce", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Spaghetti",qty:1,unit:"box",store:"publix"},{item:"Marinara (no sugar, Rao's)",qty:1.5,unit:"cups",store:"publix"},{item:"Parmesan",qty:0.25,unit:"cup",store:"costco"}] },
  "std-turkey-tacos": { name:"Turkey Tacos", ingredients:[{item:"Ground turkey",qty:1,unit:"lb",store:"publix"},{item:"Corn tortillas",qty:8,unit:"",store:"publix"},{item:"Cheddar (block)",qty:1,unit:"cup",store:"costco"},{item:"Taco seasoning",qty:1,unit:"packet",store:"publix",staple:true}] },
  "std-grilled-cheese-tomato-soup": { name:"Grilled Cheese & Tomato Soup", ingredients:[{item:"Bread",qty:4,unit:"slices",store:"publix"},{item:"Cheddar (block)",qty:4,unit:"slices",store:"costco"},{item:"Tomato soup",qty:1,unit:"can",store:"publix"},{item:"Butter (grass-fed)",qty:2,unit:"tbsp",store:"costco"}] },
  "std-beef-burrito-bowl": { name:"Beef Burrito Bowl", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"White rice",qty:1,unit:"cup",store:"publix"},{item:"Black beans",qty:1,unit:"can",store:"publix"},{item:"Cheddar (block)",qty:1,unit:"cup",store:"costco"},{item:"Salsa",qty:0.5,unit:"cup",store:"publix"}] },
  "std-baked-ziti": { name:"Baked Ziti", ingredients:[{item:"Ziti pasta",qty:1,unit:"box",store:"publix"},{item:"Marinara (no sugar, Rao's)",qty:2,unit:"cups",store:"publix"},{item:"Ricotta",qty:1,unit:"cup",store:"publix"},{item:"Mozzarella (block)",qty:2,unit:"cups",store:"costco"}] },
  "std-chicken-caesar-wrap": { name:"Chicken Caesar Wrap", ingredients:[{item:"Chicken breasts",qty:1,unit:"(8oz)",store:"costco"},{item:"Flour tortillas",qty:2,unit:"",store:"publix"},{item:"Romaine",qty:2,unit:"cups",store:"publix"},{item:"Caesar dressing",qty:3,unit:"tbsp",store:"publix"},{item:"Parmesan",qty:2,unit:"tbsp",store:"costco"}] },
  "std-salmon-rice-veg": { name:"Salmon, Rice & Veg", ingredients:[{item:"Salmon fillets (wild)",qty:2,unit:"(6oz)",store:"costco"},{item:"White rice",qty:1,unit:"cup",store:"publix"},{item:"Green beans",qty:2,unit:"cups",store:"publix"}] },
  "std-cheeseburger-fries": { name:"Cheeseburger & Fries", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Burger buns",qty:4,unit:"",store:"publix"},{item:"Cheddar (block)",qty:4,unit:"slices",store:"costco"},{item:"Frozen fries",qty:1,unit:"bag",store:"publix"}] },
  "std-pancakes-eggs": { name:"Pancakes & Eggs", ingredients:[{item:"Pancake mix",qty:1,unit:"box",store:"publix"},{item:"Eggs",qty:4,unit:"",store:"costco"},{item:"Maple syrup",qty:0.25,unit:"cup",store:"publix"},{item:"Butter (grass-fed)",qty:2,unit:"tbsp",store:"costco"}] },
  "std-chicken-stir-fry-rice": { name:"Chicken Stir-Fry & Rice", ingredients:[{item:"Chicken breasts",qty:1.5,unit:"lb",store:"costco"},{item:"Stir-fry vegetables",qty:1,unit:"bag",store:"publix"},{item:"Soy sauce",qty:3,unit:"tbsp",store:"publix"},{item:"White rice",qty:1,unit:"cup",store:"publix"}] },
  "std-bbq-pork-sandwich": { name:"BBQ Pulled Pork Sandwich", ingredients:[{item:"Pork shoulder",qty:2,unit:"lb",store:"costco"},{item:"BBQ sauce",qty:1,unit:"cup",store:"publix"},{item:"Burger buns",qty:4,unit:"",store:"publix"},{item:"Coleslaw mix",qty:1,unit:"bag",store:"publix"}] },
  "std-mac-and-cheese": { name:"Mac & Cheese", ingredients:[{item:"Elbow macaroni",qty:1,unit:"box",store:"publix"},{item:"Cheddar (block)",qty:2,unit:"cups",store:"costco"},{item:"Whole milk",qty:1,unit:"cup",store:"publix"},{item:"Butter (grass-fed)",qty:3,unit:"tbsp",store:"costco"}] },
  "std-chili-cornbread": { name:"Chili & Cornbread", ingredients:[{item:"Ground beef (80/20)",qty:1,unit:"lb",store:"costco"},{item:"Kidney beans",qty:1,unit:"can",store:"publix"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"},{item:"Cornbread mix",qty:1,unit:"box",store:"publix"}] },
  "std-pasta-primavera": { name:"Pasta Primavera", ingredients:[{item:"Penne pasta",qty:1,unit:"box",store:"publix"},{item:"Mixed vegetables",qty:3,unit:"cups",store:"publix"},{item:"Parmesan",qty:0.33,unit:"cup",store:"costco"},{item:"Olive oil",qty:3,unit:"tbsp",store:"costco",staple:true}] },
  "std-club-sandwich": { name:"Turkey Club Sandwich", ingredients:[{item:"Bread",qty:3,unit:"slices",store:"publix"},{item:"Deli turkey",qty:6,unit:"oz",store:"publix"},{item:"Bacon (sugar-free)",qty:3,unit:"slices",store:"costco"},{item:"Tomato",qty:1,unit:"",store:"publix"},{item:"DIY mayo (or jar)",qty:2,unit:"tbsp",store:"costco"}] },
  "std-shrimp-tacos": { name:"Shrimp Tacos", ingredients:[{item:"Shrimp (large)",qty:1,unit:"lb",store:"costco"},{item:"Corn tortillas",qty:8,unit:"",store:"publix"},{item:"Cabbage slaw",qty:2,unit:"cups",store:"publix"},{item:"Lime",qty:2,unit:"",store:"publix"}] },
  "std-meatloaf-mashed": { name:"Meatloaf & Mashed Potatoes", ingredients:[{item:"Ground beef (80/20)",qty:1.5,unit:"lb",store:"costco"},{item:"Breadcrumbs",qty:0.5,unit:"cup",store:"publix"},{item:"Eggs",qty:1,unit:"",store:"costco"},{item:"Potatoes",qty:4,unit:"",store:"publix"}] },
  "std-greek-yogurt-bowl": { name:"Greek Yogurt Power Bowl", ingredients:[{item:"Greek yogurt (full-fat)",qty:1.5,unit:"cups",store:"costco"},{item:"Granola",qty:0.5,unit:"cup",store:"publix"},{item:"Berries",qty:1,unit:"cup",store:"publix"},{item:"Honey",qty:1,unit:"tbsp",store:"publix"}] },
  "std-pepperoni-pizza": { name:"Pepperoni Pizza", ingredients:[{item:"Pizza dough",qty:1,unit:"",store:"publix"},{item:"Marinara (no sugar, Rao's)",qty:0.75,unit:"cup",store:"publix"},{item:"Mozzarella (block)",qty:2,unit:"cups",store:"costco"},{item:"Pepperoni (uncured)",qty:20,unit:"slices",store:"publix"}] },

  // ===== PLANT-BASED MEALS =====
  "plant-chickpea-curry": { name:"Chickpea Curry", ingredients:[{item:"Chickpeas",qty:2,unit:"cans",store:"publix"},{item:"Coconut milk (full-fat)",qty:1,unit:"can",store:"publix"},{item:"Curry powder",qty:2,unit:"tbsp",store:"publix",staple:true},{item:"Spinach",qty:2,unit:"cups",store:"publix"}] },
  "plant-tofu-stir-fry": { name:"Tofu Stir-Fry", ingredients:[{item:"Firm tofu",qty:1,unit:"block",store:"publix"},{item:"Stir-fry vegetables",qty:1,unit:"bag",store:"publix"},{item:"Soy sauce",qty:3,unit:"tbsp",store:"publix"},{item:"White rice",qty:1,unit:"cup",store:"publix"}] },
  "plant-black-bean-tacos": { name:"Black Bean Tacos", ingredients:[{item:"Black beans",qty:2,unit:"cans",store:"publix"},{item:"Corn tortillas",qty:8,unit:"",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Salsa",qty:0.5,unit:"cup",store:"publix"}] },
  "plant-lentil-soup": { name:"Lentil Soup", ingredients:[{item:"Dry lentils",qty:1.5,unit:"cups",store:"publix"},{item:"Carrots",qty:3,unit:"",store:"publix"},{item:"Celery",qty:3,unit:"stalks",store:"publix"},{item:"Vegetable broth",qty:4,unit:"cups",store:"publix"}] },
  "plant-quinoa-buddha-bowl": { name:"Quinoa Buddha Bowl", ingredients:[{item:"Quinoa",qty:1,unit:"cup",store:"publix"},{item:"Chickpeas",qty:1,unit:"can",store:"publix"},{item:"Sweet potato",qty:1,unit:"",store:"publix"},{item:"Kale",qty:2,unit:"cups",store:"publix"},{item:"Tahini",qty:2,unit:"tbsp",store:"publix"}] },
  "plant-veggie-chili": { name:"Veggie Chili", ingredients:[{item:"Kidney beans",qty:1,unit:"can",store:"publix"},{item:"Black beans",qty:1,unit:"can",store:"publix"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Chili powder",qty:2,unit:"tbsp",store:"publix",staple:true}] },
  "plant-peanut-noodles": { name:"Peanut Noodles", ingredients:[{item:"Rice noodles",qty:1,unit:"box",store:"publix"},{item:"Peanut butter",qty:0.33,unit:"cup",store:"publix"},{item:"Soy sauce",qty:2,unit:"tbsp",store:"publix"},{item:"Stir-fry vegetables",qty:1,unit:"bag",store:"publix"}] },
  "plant-falafel-bowl": { name:"Falafel Bowl", ingredients:[{item:"Falafel mix",qty:1,unit:"box",store:"publix"},{item:"Hummus",qty:0.5,unit:"cup",store:"publix"},{item:"Cucumber",qty:1,unit:"",store:"publix"},{item:"Cherry tomatoes",qty:1,unit:"cup",store:"publix"}] },
  "plant-tempeh-stir-fry": { name:"Tempeh Stir-Fry", ingredients:[{item:"Tempeh",qty:1,unit:"block",store:"publix"},{item:"Broccoli",qty:2,unit:"cups",store:"publix"},{item:"Coconut aminos",qty:3,unit:"tbsp",store:"amazon"},{item:"Brown rice",qty:1,unit:"cup",store:"publix"}] },
  "plant-hummus-veggie-wrap": { name:"Hummus Veggie Wrap", ingredients:[{item:"Flour tortillas",qty:2,unit:"",store:"publix"},{item:"Hummus",qty:0.5,unit:"cup",store:"publix"},{item:"Mixed vegetables",qty:2,unit:"cups",store:"publix"},{item:"Spinach",qty:1,unit:"cup",store:"publix"}] },
  "plant-mushroom-risotto": { name:"Mushroom Risotto", ingredients:[{item:"Arborio rice",qty:1,unit:"cup",store:"publix"},{item:"Mushrooms (cremini)",qty:8,unit:"oz",store:"publix"},{item:"Vegetable broth",qty:4,unit:"cups",store:"publix"},{item:"Nutritional yeast",qty:2,unit:"tbsp",store:"publix"}] },
  "plant-sweet-potato-bean-bowl": { name:"Sweet Potato Black Bean Bowl", ingredients:[{item:"Sweet potato",qty:2,unit:"",store:"publix"},{item:"Black beans",qty:1,unit:"can",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Brown rice",qty:1,unit:"cup",store:"publix"}] },
  "plant-pasta-marinara": { name:"Pasta Marinara", ingredients:[{item:"Spaghetti",qty:1,unit:"box",store:"publix"},{item:"Marinara (no sugar, Rao's)",qty:1.5,unit:"cups",store:"publix"},{item:"Nutritional yeast",qty:2,unit:"tbsp",store:"publix"}] },
  "plant-tofu-scramble": { name:"Tofu Scramble", ingredients:[{item:"Firm tofu",qty:1,unit:"block",store:"publix"},{item:"Spinach",qty:2,unit:"cups",store:"publix"},{item:"Bell peppers",qty:1,unit:"",store:"publix"},{item:"Turmeric",qty:0.5,unit:"tsp",store:"publix",staple:true}] },
  "plant-overnight-oats": { name:"Overnight Oats", ingredients:[{item:"Rolled oats",qty:1,unit:"cup",store:"publix"},{item:"Almond milk",qty:1,unit:"cup",store:"publix"},{item:"Chia seeds",qty:1,unit:"tbsp",store:"publix"},{item:"Banana",qty:1,unit:"",store:"publix"},{item:"Peanut butter",qty:1,unit:"tbsp",store:"publix"}] },
  "plant-veggie-burger": { name:"Veggie Burger", ingredients:[{item:"Veggie burger patties",qty:2,unit:"",store:"publix"},{item:"Burger buns",qty:2,unit:"",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Lettuce & tomato",qty:1,unit:"to taste",store:"publix"}] },
  "plant-coconut-lentils": { name:"Coconut Curry Lentils", ingredients:[{item:"Dry lentils",qty:1.5,unit:"cups",store:"publix"},{item:"Coconut milk (full-fat)",qty:1,unit:"can",store:"publix"},{item:"Curry powder",qty:2,unit:"tbsp",store:"publix",staple:true},{item:"Spinach",qty:2,unit:"cups",store:"publix"}] },
  "plant-stuffed-peppers": { name:"Rice & Bean Stuffed Peppers", ingredients:[{item:"Bell peppers",qty:4,unit:"",store:"publix"},{item:"Brown rice",qty:1,unit:"cup",store:"publix"},{item:"Black beans",qty:1,unit:"can",store:"publix"},{item:"Crushed tomatoes",qty:1,unit:"can",store:"publix"}] },
  "plant-edamame-rice-bowl": { name:"Edamame Rice Bowl", ingredients:[{item:"Shelled edamame",qty:2,unit:"cups",store:"publix"},{item:"Brown rice",qty:1,unit:"cup",store:"publix"},{item:"Avocados",qty:1,unit:"",store:"publix"},{item:"Soy sauce",qty:2,unit:"tbsp",store:"publix"}] },
  "plant-pb-banana-smoothie": { name:"PB Banana Smoothie", ingredients:[{item:"Banana",qty:2,unit:"",store:"publix"},{item:"Peanut butter",qty:2,unit:"tbsp",store:"publix"},{item:"Almond milk",qty:1.5,unit:"cups",store:"publix"},{item:"Pea protein powder",qty:1,unit:"scoop",store:"amazon"}] },

  // --- Quick proteins & staples (single item, cook-your-own — no recipe needed) ---
  // Each = one meal serving (proteins/sides) or one pantry unit (fats); cost matches the portion.
  "staple-salmon":         { name: "Salmon fillet (6 oz)",     ingredients: [{ item: "Salmon fillets (wild)", qty: 6, unit: "oz", store: "costco" }] },
  "staple-ribeye":         { name: "Ribeye steak (8 oz)",      ingredients: [{ item: "Ribeye steak", qty: 8, unit: "oz", store: "costco" }] },
  "staple-nystrip":        { name: "NY strip steak (8 oz)",    ingredients: [{ item: "NY strip steak", qty: 8, unit: "oz", store: "costco" }] },
  "staple-sirloin":        { name: "Sirloin steak (8 oz)",     ingredients: [{ item: "Sirloin steak", qty: 8, unit: "oz", store: "costco" }] },
  "staple-chicken-thighs": { name: "Chicken thighs (8 oz)",    ingredients: [{ item: "Chicken thighs (bone-in)", qty: 8, unit: "oz", store: "costco" }] },
  "staple-chicken-breast": { name: "Chicken breast (8 oz)",    ingredients: [{ item: "Chicken breasts", qty: 8, unit: "oz", store: "costco" }] },
  "staple-ground-beef":    { name: "Ground beef (6 oz)",       ingredients: [{ item: "Ground beef (80/20)", qty: 6, unit: "oz", store: "costco" }] },
  "staple-venison":        { name: "Venison (6 oz)",           ingredients: [{ item: "Venison", qty: 6, unit: "oz", store: "publix" }] },
  "staple-pork-chops":     { name: "Pork chop (6 oz)",         ingredients: [{ item: "Pork chops", qty: 6, unit: "oz", store: "costco" }] },
  "staple-sausage":        { name: "Sausage (2 links)",        ingredients: [{ item: "Sausage (sugar-free)", qty: 2, unit: "links", store: "publix" }] },
  "staple-bacon":          { name: "Bacon (3 slices)",         ingredients: [{ item: "Bacon (sugar-free)", qty: 3, unit: "slices", store: "costco" }] },
  "staple-eggs":           { name: "Eggs (3)",                 ingredients: [{ item: "Eggs", qty: 3, unit: "", store: "costco" }] },
  "staple-shrimp":         { name: "Shrimp (6 oz)",            ingredients: [{ item: "Shrimp (large)", qty: 6, unit: "oz", store: "costco" }] },
  "staple-sardines":       { name: "Canned sardines (1 tin)",  ingredients: [{ item: "Sardines (in olive oil)", qty: 1, unit: "tin", store: "publix" }] },
  "staple-avocado":        { name: "Avocado (1)",              ingredients: [{ item: "Avocados", qty: 1, unit: "", store: "publix" }] },
  "staple-spinach":        { name: "Spinach (2 cups)",         ingredients: [{ item: "Spinach", qty: 2, unit: "cups", store: "publix" }] },
  "staple-broccoli":       { name: "Broccoli (1.5 cups)",      ingredients: [{ item: "Broccoli", qty: 1.5, unit: "cups", store: "publix" }] },
  "staple-cauliflower":    { name: "Cauliflower (1.5 cups)",   ingredients: [{ item: "Cauliflower", qty: 1.5, unit: "cups", store: "publix" }] },
  "staple-asparagus":      { name: "Asparagus (6 spears)",     ingredients: [{ item: "Asparagus", qty: 6, unit: "spears", store: "publix" }] },
  "staple-brussels":       { name: "Brussels sprouts (1 cup)", ingredients: [{ item: "Brussels sprouts", qty: 1, unit: "cup", store: "publix" }] },
  "staple-green-beans":    { name: "Green beans (1 cup)",      ingredients: [{ item: "Green beans", qty: 1, unit: "cup", store: "publix" }] },
  "staple-butter":         { name: "Butter (1 lb)",            ingredients: [{ item: "Butter (grass-fed)", qty: 1, unit: "lb", store: "costco" }] },
  "staple-cheese":         { name: "Block cheese (8 oz)",      ingredients: [{ item: "Cheddar (block)", qty: 8, unit: "oz", store: "costco" }] },
  "staple-avocado-oil":    { name: "Avocado oil (1 bottle)",   ingredients: [{ item: "Avocado oil", qty: 1, unit: "bottle", store: "costco" }] },

  /* ---- added 2026-06-03: web-sourced, balanced batch (snacks + breakfast focus) ---- */
  "keto-cottage-egg-bites": { name: "Cottage Cheese Egg Bites", ingredients: [
    { item: "Eggs", qty: 6, unit: "", store: "costco" },
    { item: "Cottage cheese", qty: 1, unit: "cup", store: "costco" },
    { item: "Cheddar (block)", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Bacon (sugar-free)", qty: 4, unit: "slices", store: "costco" },
    { item: "Chives", qty: 1, unit: "small pack", store: "publix" },
    { item: "Salt & pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},
  "keto-bacon-stuffed-mushrooms": { name: "Bacon Cream Cheese Stuffed Mushrooms", ingredients: [
    { item: "Mushrooms (cremini)", qty: 16, unit: "oz", store: "publix" },
    { item: "Cream cheese", qty: 6, unit: "oz", store: "costco" },
    { item: "Bacon (sugar-free)", qty: 6, unit: "slices", store: "costco" },
    { item: "Cheddar (block)", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Garlic", qty: 2, unit: "cloves", store: "publix" },
    { item: "Green onion", qty: 1, unit: "bunch", store: "publix" }
  ]},
  "keto-boursin-quiche": { name: "Crustless Boursin Egg Quiche", ingredients: [
    { item: "Eggs", qty: 8, unit: "", store: "costco" },
    { item: "Boursin cheese (garlic & herb)", qty: 1, unit: "(5.2oz)", store: "publix" },
    { item: "Heavy whipping cream", qty: 0.5, unit: "cup", store: "costco" },
    { item: "Spinach", qty: 2, unit: "cups", store: "publix" },
    { item: "Mushrooms (cremini)", qty: 6, unit: "oz", store: "publix" },
    { item: "Salt & pepper", qty: null, unit: "", store: "publix", staple: true }
  ]},
  "paleo-chia-pudding": { name: "Coconut Chia Pudding", ingredients: [
    { item: "Chia seeds", qty: 0.5, unit: "cup", store: "amazon" },
    { item: "Coconut milk (full-fat)", qty: 1, unit: "(13.5oz can)", store: "publix" },
    { item: "Maple syrup", qty: 2, unit: "tbsp", store: "publix" },
    { item: "Vanilla extract", qty: 1, unit: "tsp", store: "costco", staple: true },
    { item: "Berries (mixed)", qty: 1, unit: "cup", store: "publix" }
  ]},
  "paleo-smoked-salmon-avocado": { name: "Smoked Salmon & Avocado Plate", ingredients: [
    { item: "Smoked salmon", qty: 6, unit: "oz", store: "publix" },
    { item: "Avocados", qty: 2, unit: "", store: "publix" },
    { item: "Cucumber", qty: 1, unit: "", store: "publix" },
    { item: "Lemon", qty: 1, unit: "", store: "publix" },
    { item: "Capers", qty: 1, unit: "tbsp", store: "amazon" },
    { item: "Olive oil", qty: 1, unit: "tbsp", store: "costco", staple: true }
  ]},
  "paleo-honey-garlic-chicken": { name: "Honey Garlic Chicken", ingredients: [
    { item: "Chicken thighs (boneless)", qty: 1.5, unit: "lb", store: "costco" },
    { item: "Honey", qty: 3, unit: "tbsp", store: "publix" },
    { item: "Coconut aminos", qty: 3, unit: "tbsp", store: "amazon" },
    { item: "Garlic", qty: 5, unit: "cloves", store: "publix" },
    { item: "Ginger", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Green beans", qty: 12, unit: "oz", store: "publix" },
    { item: "Avocado oil", qty: 1, unit: "tbsp", store: "costco", staple: true }
  ]},
  "std-cottage-cheese-pancakes": { name: "Cottage Cheese Protein Pancakes", ingredients: [
    { item: "Cottage cheese", qty: 1, unit: "cup", store: "costco" },
    { item: "Eggs", qty: 4, unit: "", store: "costco" },
    { item: "Oats (rolled)", qty: 1, unit: "cup", store: "costco" },
    { item: "Banana", qty: 1, unit: "", store: "publix" },
    { item: "Baking powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Vanilla extract", qty: 1, unit: "tsp", store: "costco", staple: true }
  ]},
  "std-baked-pumpkin-oats": { name: "Baked Pumpkin Protein Oats", ingredients: [
    { item: "Oats (rolled)", qty: 2, unit: "cups", store: "costco" },
    { item: "Pumpkin puree", qty: 1, unit: "cup", store: "publix" },
    { item: "Greek yogurt", qty: 1, unit: "cup", store: "publix" },
    { item: "Eggs", qty: 2, unit: "", store: "costco" },
    { item: "Maple syrup", qty: 3, unit: "tbsp", store: "publix" },
    { item: "Protein powder (vanilla)", qty: 1, unit: "scoop", store: "amazon" },
    { item: "Pumpkin pie spice", qty: 1, unit: "tbsp", store: "publix", staple: true }
  ]},
  "std-apple-peanut-butter": { name: "Apple & Peanut Butter", ingredients: [
    { item: "Apple", qty: 1, unit: "", store: "publix" },
    { item: "Peanut butter", qty: 2, unit: "tbsp", store: "costco" }
  ]},
  "plant-roasted-chickpeas": { name: "Crispy Roasted Chickpeas", ingredients: [
    { item: "Chickpeas", qty: 2, unit: "(15oz cans)", store: "publix" },
    { item: "Olive oil", qty: 2, unit: "tbsp", store: "costco", staple: true },
    { item: "Paprika", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Garlic powder", qty: 1, unit: "tsp", store: "publix", staple: true },
    { item: "Salt", qty: null, unit: "", store: "publix", staple: true }
  ]},
  "plant-edamame-snack": { name: "Sea-Salt Edamame", ingredients: [
    { item: "Edamame (in shell, frozen)", qty: 16, unit: "oz", store: "costco" },
    { item: "Sesame oil", qty: 1, unit: "tsp", store: "amazon" },
    { item: "Sea salt", qty: null, unit: "pinch", store: "publix", staple: true }
  ]},
  "plant-teriyaki-tofu-broccoli": { name: "Teriyaki Tofu & Broccoli", ingredients: [
    { item: "Extra-firm tofu", qty: 14, unit: "oz", store: "publix" },
    { item: "Broccoli", qty: 12, unit: "oz", store: "publix" },
    { item: "Coconut aminos", qty: 3, unit: "tbsp", store: "amazon" },
    { item: "Maple syrup", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Garlic", qty: 3, unit: "cloves", store: "publix" },
    { item: "Ginger", qty: 1, unit: "tbsp", store: "publix" },
    { item: "Rice (cooked)", qty: 1.5, unit: "cups", store: "costco" },
    { item: "Sesame oil", qty: 1, unit: "tbsp", store: "amazon" }
  ]}

};

/* Per-serving diet + macros. Format: [diet, calories, protein(g), carbs(g), fat(g)].
 * diet: 'keto' | 'paleo' | 'standard' | 'plant' | 'any' (staples fit every diet).
 * Macros are solid estimates from the ingredients — for planning, not lab-exact. */
window.RECIPE_META = {
  // keto
  "almond-flour-pancakes":["keto",450,16,8,38], "savory-chaffles":["keto",250,16,4,19],
  "fathead-pizza":["keto",520,28,9,40], "jalapeno-popper-stuffed-chicken":["keto",520,45,4,36],
  "creamy-mushroom-chicken":["keto",480,35,6,35], "pan-seared-salmon-dill-cream":["keto",470,34,3,36],
  "shrimp-scampi-zucchini":["keto",380,30,8,26], "indian-butter-chicken":["keto",560,38,10,40],
  "crispy-chicken-thighs":["keto",520,34,3,42], "crack-chicken":["keto",500,40,5,36],
  "bacon-cheeseburger-casserole":["keto",560,38,7,42], "egg-roll-in-a-bowl":["keto",400,24,10,29],
  "keto-beef-bulgogi":["keto",520,34,9,38], "chocolate-cheesecake-fat-bombs":["keto",180,3,3,18],
  "keto-mayo":["keto",90,0,0,10], "keto-ketchup":["keto",15,0,3,0], "ranch-dressing":["keto",120,1,1,13],
  "caesar-dressing":["keto",150,1,1,16], "bbq-sauce":["keto",20,0,4,0],
  "keto-cobb-salad":["keto",520,38,9,38], "keto-philly-cheesesteak-bowl":["keto",540,36,10,40],
  "keto-tuna-stuffed-avocado":["keto",430,28,9,32], "keto-garlic-butter-steak-bites":["keto",520,40,3,40],
  "keto-sausage-peppers":["keto",480,26,12,36], "keto-chicken-alfredo-zoodles":["keto",560,42,10,40],
  // paleo
  "paleo-grilled-chicken-veggies":["paleo",420,45,12,20], "paleo-beef-chili":["paleo",430,32,18,26],
  "paleo-salmon-asparagus":["paleo",440,36,8,30], "paleo-shrimp-stir-fry":["paleo",330,34,14,14],
  "paleo-pork-carnitas":["paleo",480,38,6,34], "paleo-meatballs-marinara":["paleo",450,32,12,30],
  "paleo-chicken-lettuce-wraps":["paleo",360,32,12,20], "paleo-steak-sweet-potato":["paleo",520,40,28,26],
  "paleo-turkey-hash":["paleo",450,35,22,24], "paleo-egg-muffins":["paleo",320,24,6,22],
  "paleo-tuna-avocado-salad":["paleo",400,34,10,26], "paleo-baked-cod-veg":["paleo",360,38,12,18],
  "paleo-bunless-burger":["paleo",480,34,10,34], "paleo-chicken-curry":["paleo",540,38,14,36],
  "paleo-sausage-veggie-skillet":["paleo",470,28,26,28], "paleo-stuffed-peppers":["paleo",420,30,20,24],
  "paleo-beef-stew":["paleo",430,38,18,22], "paleo-cobb-salad":["paleo",480,36,8,34],
  "paleo-zoodle-bolognese":["paleo",420,32,16,26], "paleo-banana-almond-pancakes":["paleo",430,18,30,28],
  // standard
  "std-chicken-rice-broccoli":["standard",560,48,55,14], "std-spaghetti-meat-sauce":["standard",640,34,72,24],
  "std-turkey-tacos":["standard",520,34,42,24], "std-grilled-cheese-tomato-soup":["standard",560,20,52,30],
  "std-beef-burrito-bowl":["standard",700,40,72,28], "std-baked-ziti":["standard",620,30,68,26],
  "std-chicken-caesar-wrap":["standard",600,42,46,28], "std-salmon-rice-veg":["standard",580,40,58,18],
  "std-cheeseburger-fries":["standard",780,38,62,42], "std-pancakes-eggs":["standard",620,24,78,24],
  "std-chicken-stir-fry-rice":["standard",600,46,62,16], "std-bbq-pork-sandwich":["standard",680,40,64,28],
  "std-mac-and-cheese":["standard",680,26,72,32], "std-chili-cornbread":["standard",620,34,68,24],
  "std-pasta-primavera":["standard",560,18,78,20], "std-club-sandwich":["standard",560,38,40,26],
  "std-shrimp-tacos":["standard",480,34,52,14], "std-meatloaf-mashed":["standard",640,42,48,30],
  "std-greek-yogurt-bowl":["standard",520,32,62,16], "std-pepperoni-pizza":["standard",720,34,68,34],
  // plant
  "plant-chickpea-curry":["plant",480,18,58,20], "plant-tofu-stir-fry":["plant",520,24,68,16],
  "plant-black-bean-tacos":["plant",460,18,66,14], "plant-lentil-soup":["plant",400,24,60,6],
  "plant-quinoa-buddha-bowl":["plant",560,22,78,18], "plant-veggie-chili":["plant",420,22,72,6],
  "plant-peanut-noodles":["plant",580,20,78,22], "plant-falafel-bowl":["plant",520,18,62,22],
  "plant-tempeh-stir-fry":["plant",540,30,58,20], "plant-hummus-veggie-wrap":["plant",480,16,62,20],
  "plant-mushroom-risotto":["plant",520,14,82,14], "plant-sweet-potato-bean-bowl":["plant",560,18,88,14],
  "plant-pasta-marinara":["plant",560,18,98,8], "plant-tofu-scramble":["plant",320,24,14,20],
  "plant-overnight-oats":["plant",480,16,68,16], "plant-veggie-burger":["plant",520,22,58,22],
  "plant-coconut-lentils":["plant",520,22,62,22], "plant-stuffed-peppers":["plant",440,16,82,8],
  "plant-edamame-rice-bowl":["plant",540,24,72,18], "plant-pb-banana-smoothie":["plant",440,24,52,14],
  // staples / quick proteins (fit any diet)
  "staple-salmon":["any",240,34,0,11], "staple-ribeye":["any",580,46,0,44], "staple-nystrip":["any",480,52,0,30],
  "staple-sirloin":["any",440,50,0,26], "staple-chicken-thighs":["any",440,40,0,30], "staple-chicken-breast":["any",260,54,0,6],
  "staple-ground-beef":["any",430,36,0,32], "staple-venison":["any",270,46,0,8], "staple-pork-chops":["any",340,42,0,18],
  "staple-sausage":["any",360,20,2,30], "staple-bacon":["any",160,12,0,12], "staple-eggs":["any",220,18,2,15],
  "staple-shrimp":["any",170,34,2,2], "staple-sardines":["any",200,23,0,11], "staple-avocado":["any",240,3,12,22],
  "staple-spinach":["any",14,2,2,0], "staple-broccoli":["any",50,4,10,0], "staple-cauliflower":["any",40,3,8,0],
  "staple-asparagus":["any",20,2,4,0], "staple-brussels":["any",40,3,8,0], "staple-green-beans":["any",35,2,8,0],
  "staple-butter":["any",100,0,0,11], "staple-cheese":["any",110,7,1,9], "staple-avocado-oil":["any",120,0,0,14],
  // added 2026-06-03 (web-sourced, balanced batch)
  "keto-cottage-egg-bites":["keto",150,14,3,9], "keto-bacon-stuffed-mushrooms":["keto",230,11,5,19],
  "keto-boursin-quiche":["keto",440,33,6,32],
  "paleo-chia-pudding":["paleo",260,7,22,17], "paleo-smoked-salmon-avocado":["paleo",350,24,9,26],
  "paleo-honey-garlic-chicken":["paleo",430,38,20,20],
  "std-cottage-cheese-pancakes":["standard",420,34,38,12], "std-baked-pumpkin-oats":["standard",326,25,42,8],
  "std-apple-peanut-butter":["standard",210,7,25,12],
  "plant-roasted-chickpeas":["plant",130,6,18,4], "plant-edamame-snack":["plant",120,11,9,5],
  "plant-teriyaki-tofu-broccoli":["plant",330,21,28,14]
};

/* Meal-type tags for the planner's meal-type filter. Arrays — a recipe can fit
 * more than one slot. Taxonomy: breakfast | lunch | dinner | snack | side.
 * The planner has no fixed meal slots, so this just narrows the picker list:
 * breakfast/snack/side are the meaningful discriminators, while mains are tagged
 * BOTH lunch+dinner (interchangeable). EVERY pickable recipe (RECIPES minus
 * NOPLAN) must have an entry here or it vanishes under a specific filter. */
window.RECIPE_MEAL = {
  // keto
  "almond-flour-pancakes":["breakfast"], "savory-chaffles":["breakfast","side"],
  "fathead-pizza":["lunch","dinner"], "jalapeno-popper-stuffed-chicken":["lunch","dinner"],
  "creamy-mushroom-chicken":["lunch","dinner"], "pan-seared-salmon-dill-cream":["lunch","dinner"],
  "shrimp-scampi-zucchini":["lunch","dinner"], "indian-butter-chicken":["lunch","dinner"],
  "crispy-chicken-thighs":["lunch","dinner"], "crack-chicken":["lunch","dinner"],
  "bacon-cheeseburger-casserole":["lunch","dinner"], "egg-roll-in-a-bowl":["lunch","dinner"],
  "keto-beef-bulgogi":["lunch","dinner"], "chocolate-cheesecake-fat-bombs":["snack"],
  "keto-cobb-salad":["lunch","dinner"], "keto-philly-cheesesteak-bowl":["lunch","dinner"],
  "keto-tuna-stuffed-avocado":["lunch","dinner"], "keto-garlic-butter-steak-bites":["lunch","dinner"],
  "keto-sausage-peppers":["lunch","dinner"], "keto-chicken-alfredo-zoodles":["lunch","dinner"],
  // paleo
  "paleo-grilled-chicken-veggies":["lunch","dinner"], "paleo-beef-chili":["lunch","dinner"],
  "paleo-salmon-asparagus":["lunch","dinner"], "paleo-shrimp-stir-fry":["lunch","dinner"],
  "paleo-pork-carnitas":["lunch","dinner"], "paleo-meatballs-marinara":["lunch","dinner"],
  "paleo-chicken-lettuce-wraps":["lunch","dinner"], "paleo-steak-sweet-potato":["lunch","dinner"],
  "paleo-turkey-hash":["breakfast","dinner"], "paleo-egg-muffins":["breakfast"],
  "paleo-tuna-avocado-salad":["lunch","dinner"], "paleo-baked-cod-veg":["lunch","dinner"],
  "paleo-bunless-burger":["lunch","dinner"], "paleo-chicken-curry":["lunch","dinner"],
  "paleo-sausage-veggie-skillet":["breakfast","lunch","dinner"], "paleo-stuffed-peppers":["lunch","dinner"],
  "paleo-beef-stew":["lunch","dinner"], "paleo-cobb-salad":["lunch","dinner"],
  "paleo-zoodle-bolognese":["lunch","dinner"], "paleo-banana-almond-pancakes":["breakfast"],
  // standard
  "std-chicken-rice-broccoli":["lunch","dinner"], "std-spaghetti-meat-sauce":["lunch","dinner"],
  "std-turkey-tacos":["lunch","dinner"], "std-grilled-cheese-tomato-soup":["lunch","dinner"],
  "std-beef-burrito-bowl":["lunch","dinner"], "std-baked-ziti":["lunch","dinner"],
  "std-chicken-caesar-wrap":["lunch","dinner"], "std-salmon-rice-veg":["lunch","dinner"],
  "std-cheeseburger-fries":["lunch","dinner"], "std-pancakes-eggs":["breakfast"],
  "std-chicken-stir-fry-rice":["lunch","dinner"], "std-bbq-pork-sandwich":["lunch","dinner"],
  "std-mac-and-cheese":["lunch","dinner"], "std-chili-cornbread":["lunch","dinner"],
  "std-pasta-primavera":["lunch","dinner"], "std-club-sandwich":["lunch","dinner"],
  "std-shrimp-tacos":["lunch","dinner"], "std-meatloaf-mashed":["lunch","dinner"],
  "std-greek-yogurt-bowl":["breakfast","snack"], "std-pepperoni-pizza":["lunch","dinner"],
  // plant
  "plant-chickpea-curry":["lunch","dinner"], "plant-tofu-stir-fry":["lunch","dinner"],
  "plant-black-bean-tacos":["lunch","dinner"], "plant-lentil-soup":["lunch","dinner"],
  "plant-quinoa-buddha-bowl":["lunch","dinner"], "plant-veggie-chili":["lunch","dinner"],
  "plant-peanut-noodles":["lunch","dinner"], "plant-falafel-bowl":["lunch","dinner"],
  "plant-tempeh-stir-fry":["lunch","dinner"], "plant-hummus-veggie-wrap":["lunch","dinner"],
  "plant-mushroom-risotto":["lunch","dinner"], "plant-sweet-potato-bean-bowl":["lunch","dinner"],
  "plant-pasta-marinara":["lunch","dinner"], "plant-tofu-scramble":["breakfast"],
  "plant-overnight-oats":["breakfast"], "plant-veggie-burger":["lunch","dinner"],
  "plant-coconut-lentils":["lunch","dinner"], "plant-stuffed-peppers":["lunch","dinner"],
  "plant-edamame-rice-bowl":["lunch","dinner"], "plant-pb-banana-smoothie":["breakfast","snack"],
  // staples / quick proteins + veg sides
  "staple-salmon":["lunch","dinner"], "staple-ribeye":["lunch","dinner"], "staple-nystrip":["lunch","dinner"],
  "staple-sirloin":["lunch","dinner"], "staple-chicken-thighs":["lunch","dinner"], "staple-chicken-breast":["lunch","dinner"],
  "staple-ground-beef":["lunch","dinner"], "staple-venison":["lunch","dinner"], "staple-pork-chops":["lunch","dinner"],
  "staple-sausage":["breakfast","dinner"], "staple-bacon":["breakfast","side"], "staple-eggs":["breakfast"],
  "staple-shrimp":["lunch","dinner"], "staple-sardines":["lunch","dinner","snack"], "staple-avocado":["side"],
  "staple-spinach":["side"], "staple-broccoli":["side"], "staple-cauliflower":["side"],
  "staple-asparagus":["side"], "staple-brussels":["side"], "staple-green-beans":["side"],
  // added 2026-06-03 (web-sourced, balanced batch)
  "keto-cottage-egg-bites":["breakfast","snack"], "keto-bacon-stuffed-mushrooms":["snack"],
  "keto-boursin-quiche":["breakfast"], "paleo-chia-pudding":["breakfast","snack"],
  "paleo-smoked-salmon-avocado":["breakfast","lunch"], "paleo-honey-garlic-chicken":["lunch","dinner"],
  "std-cottage-cheese-pancakes":["breakfast"], "std-baked-pumpkin-oats":["breakfast","snack"],
  "std-apple-peanut-butter":["snack"], "plant-roasted-chickpeas":["snack","side"],
  "plant-edamame-snack":["snack","side"], "plant-teriyaki-tofu-broccoli":["lunch","dinner"]
};

/* Recipes that should NOT appear in the day-by-day meal picker (condiments,
 * bulk fats/cheese) — they go on the shopping list but aren't a "meal." */
window.NOPLAN = {
  "keto-mayo":1, "keto-ketchup":1, "ranch-dressing":1, "caesar-dressing":1, "bbq-sauce":1,
  "staple-butter":1, "staple-cheese":1, "staple-avocado-oil":1
};

/* Estimated full-batch grocery cost per recipe (USD, rough — FL grocery prices).
 * Used by the cookbook cost column + weekly budget tray + meal-plan list.
 * Weekly total = sum of picked recipes (UPPER BOUND — shared bulk staples like
 * cheese/oil get bought once but counted per recipe, so real spend is usually lower).
 */
window.RECIPE_COST = {
  "keto-cobb-salad": 10, "keto-philly-cheesesteak-bowl": 12, "keto-tuna-stuffed-avocado": 6,
  "keto-garlic-butter-steak-bites": 11, "keto-sausage-peppers": 9, "keto-chicken-alfredo-zoodles": 10,
  "paleo-grilled-chicken-veggies": 9, "paleo-beef-chili": 10, "paleo-salmon-asparagus": 16,
  "paleo-shrimp-stir-fry": 13, "paleo-pork-carnitas": 12, "paleo-meatballs-marinara": 9,
  "paleo-chicken-lettuce-wraps": 8, "paleo-steak-sweet-potato": 14, "paleo-turkey-hash": 8,
  "paleo-egg-muffins": 6, "paleo-tuna-avocado-salad": 6, "paleo-baked-cod-veg": 12,
  "paleo-bunless-burger": 9, "paleo-chicken-curry": 11, "paleo-sausage-veggie-skillet": 9,
  "paleo-stuffed-peppers": 10, "paleo-beef-stew": 13, "paleo-cobb-salad": 10, "paleo-zoodle-bolognese": 9,
  "paleo-banana-almond-pancakes": 5,
  "std-chicken-rice-broccoli": 8, "std-spaghetti-meat-sauce": 9, "std-turkey-tacos": 9,
  "std-grilled-cheese-tomato-soup": 5, "std-beef-burrito-bowl": 11, "std-baked-ziti": 10,
  "std-chicken-caesar-wrap": 8, "std-salmon-rice-veg": 15, "std-cheeseburger-fries": 11,
  "std-pancakes-eggs": 5, "std-chicken-stir-fry-rice": 10, "std-bbq-pork-sandwich": 11,
  "std-mac-and-cheese": 7, "std-chili-cornbread": 9, "std-pasta-primavera": 7, "std-club-sandwich": 8,
  "std-shrimp-tacos": 12, "std-meatloaf-mashed": 10, "std-greek-yogurt-bowl": 6, "std-pepperoni-pizza": 9,
  "plant-chickpea-curry": 7, "plant-tofu-stir-fry": 7, "plant-black-bean-tacos": 6, "plant-lentil-soup": 6,
  "plant-quinoa-buddha-bowl": 8, "plant-veggie-chili": 6, "plant-peanut-noodles": 7, "plant-falafel-bowl": 7,
  "plant-tempeh-stir-fry": 8, "plant-hummus-veggie-wrap": 6, "plant-mushroom-risotto": 8,
  "plant-sweet-potato-bean-bowl": 6, "plant-pasta-marinara": 5, "plant-tofu-scramble": 6,
  "plant-overnight-oats": 5, "plant-veggie-burger": 8, "plant-coconut-lentils": 7, "plant-stuffed-peppers": 7,
  "plant-edamame-rice-bowl": 7, "plant-pb-banana-smoothie": 6,
  "almond-flour-pancakes": 4,
  "savory-chaffles": 2,
  "fathead-pizza": 7,
  "jalapeno-popper-stuffed-chicken": 14,
  "creamy-mushroom-chicken": 13,
  "pan-seared-salmon-dill-cream": 18,
  "shrimp-scampi-zucchini": 15,
  "indian-butter-chicken": 14,
  "crispy-chicken-thighs": 10,
  "crack-chicken": 13,
  "bacon-cheeseburger-casserole": 16,
  "egg-roll-in-a-bowl": 9,
  "keto-beef-bulgogi": 18,
  "chocolate-cheesecake-fat-bombs": 6,
  "keto-mayo": 3,
  "keto-ketchup": 2,
  "ranch-dressing": 4,
  "caesar-dressing": 5,
  "bbq-sauce": 2,
  "staple-salmon": 8, "staple-ribeye": 11, "staple-nystrip": 9, "staple-sirloin": 6,
  "staple-chicken-thighs": 3, "staple-chicken-breast": 3, "staple-ground-beef": 3,
  "staple-venison": 0, "staple-pork-chops": 3, "staple-sausage": 2, "staple-bacon": 2,
  "staple-eggs": 1, "staple-shrimp": 5, "staple-sardines": 2, "staple-avocado": 1,
  "staple-spinach": 1, "staple-broccoli": 1, "staple-cauliflower": 1, "staple-asparagus": 2,
  "staple-brussels": 2, "staple-green-beans": 1, "staple-butter": 5, "staple-cheese": 4,
  "staple-avocado-oil": 9,
  "keto-cottage-egg-bites": 6, "keto-bacon-stuffed-mushrooms": 9, "keto-boursin-quiche": 11,
  "paleo-chia-pudding": 7, "paleo-smoked-salmon-avocado": 13, "paleo-honey-garlic-chicken": 10,
  "std-cottage-cheese-pancakes": 5, "std-baked-pumpkin-oats": 7, "std-apple-peanut-butter": 2,
  "plant-roasted-chickpeas": 3, "plant-edamame-snack": 4, "plant-teriyaki-tofu-broccoli": 7
};

/* Items that go on the shopping list but should NOT count as a "meal"
 * toward the weekly meal target (sides, fats, condiments). */
window.NOT_MEAL = {
  "staple-avocado": 1, "staple-spinach": 1, "staple-broccoli": 1, "staple-cauliflower": 1,
  "staple-asparagus": 1, "staple-brussels": 1, "staple-green-beans": 1,
  "staple-butter": 1, "staple-cheese": 1, "staple-avocado-oil": 1
};

/* Meal-plan storage = { recipeId: count }. Migrate the old array form, drop any
 * ids that no longer exist or have a non-positive count. Self-healing on every load. */
try {
  var _counts = JSON.parse(localStorage.getItem('meal-plan-counts') || 'null');
  if (!_counts) {
    var _wk = JSON.parse(localStorage.getItem('meal-plan-week') || '[]');
    _counts = {};
    _wk.forEach(function(id){ _counts[id] = (_counts[id] || 0) + 1; });
  }
  var _clean = {};
  Object.keys(_counts).forEach(function(id){
    if (window.RECIPES[id] && _counts[id] > 0) _clean[id] = _counts[id];
  });
  localStorage.setItem('meal-plan-counts', JSON.stringify(_clean));
} catch (e) {}
