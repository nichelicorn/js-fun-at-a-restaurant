function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };

  return menuItem;
  // error - cannot read property 'name' of undefined (failing on line 44 of test)
  // the test is requiring an output on line 44 of menuItem.name, 'Delicious French Toast'
  // the console.log is returning Delicious French Toast
  // Had to add a `return` statement - works fine now!
};

function addIngredients(ingr, ingredients) {
  if (ingredients.includes(ingr)) {
    return ingredients;
  } else {
    ingredients.push(ingr);
    return ingredients;
  };

  // as written, the console.log is returning 1 ['cheese'] - this appears to match the expected output on the test, but it is not being recognized as correct
  // AssertionError: expected 0 to equal 1; where is the 0 coming from? my console.log is showing a value of 1 as the length
  // was missing a parameter - removed variable to hold empty array
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  // console.log(price, price - (price * 0.10));
  return price - (price * 0.10);
};

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };

  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
