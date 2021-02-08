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
    // console.log('item:', item);
    // console.log('item name:', item.name);
    if (item.name === 'Quiche') {
      return `Sorry, we aren't serving Quiche today.`;
    } else {
      return `Yes, we're serving ${item.name} today!`;
    }
  }

};

module.exports = Chef;
