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
};

function addIngredients(ingr, ingredients) {
  if (ingredients.includes(ingr)) {
    return ingredients;
  } else {
    ingredients.push(ingr);
    return ingredients;
  };
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
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
