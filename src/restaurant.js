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
  // console.log('this is the name param:', name);
  // console.log('this is the item param:', item);
  name.menus.lunch.push(item);
  // console.log('this is the pushed name:', name)
  // console.log('this is the expected output:', pizzaRestaurant.menus.lunch[0]);

  // how do I take the item and put it in the name??


  // var menu =  {
  //   name: name,
  //   menus: {
  //     breakfast: [],
  //     lunch: {
  //       item
  //     },
  //     dinner: [],
  //   },
  // };

  // console.log('this is a lunch item:', menu.menus.lunch);
  // return menu;
};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
