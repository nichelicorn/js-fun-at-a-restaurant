class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(cust, bool) {
    if (bool === true) {
      return `Good morning, ${cust}!`;
    } else {
      return `Hello, ${cust}!`;
    }
  }

  checkForFood(item) {
    if (item) {
      return `Yes, we're serving ${item.name} today!`;
    }
  }
};

module.exports = Chef;
