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
  ]}

};
