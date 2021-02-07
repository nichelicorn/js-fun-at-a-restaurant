function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
};

function addMenuItem(name, item) {
  var menu =  {
    name: name,
    menus: {
      breakfast: [],
      lunch: {
        name: item,
        price: 0,
        type: '',
      },
      dinner: [],
    },
  };

  console.log('this is a lunch item:', menu.menus.lunch);
  return menu;
};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
