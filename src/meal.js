function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };

  console.log(menuItem.name);
  return menuItem;
  // error - cannot read property 'name' of undefined (failing on line 44 of test)
  // the test is requiring an output on line 44 of menuItem.name, 'Delicious French Toast'
  // the console.log is returning Delicious French Toast
  // Had to add a `return` statement - works fine now!
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
};
