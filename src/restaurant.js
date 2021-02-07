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
  console.log('this is the name param:', name);
  console.log('this is the item param:', item);

  name.menus.lunch.push(item);

  // for (var i = 0; i < name.length; i++) {
    if (name.menu === 'breakfast') {
      name.menus.breakfast.push(item);
    } else if (name.menu === 'lunch') {
      name.menus.lunch.push(item);
    } else if (name.menu === 'dinner') {
      name.menus.dinner.push(item);
    };
    // };

  // console.log('this is the array param:', object);
  // console.log('this is the pushed name:', namxe)
  // console.log('this is the expected output:', pizzaRestaurant.menus.lunch[0]);

  // how do I take the item and put it in the name??



  // next step is to make the .push dynamic and work with any of the meal category options
  // would this need a for loop?
  // for (var i = 0; i < array.length; i++) {
  //   name.menus.l.push(item);
  // };
  // or maybe an if statement?
  // or maybe a combo?

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
