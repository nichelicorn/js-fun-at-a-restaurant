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
  // name = var pizzaRestaurant = createRestaurant("Sexy Pizza");
  // console.log('this is the item param:', item);
  // item = var bbqPizza = {
  //   name: "BBQ Chicken Pizza",
  //   price: "12.49",
  //   type: "lunch"
  // };

  // this ⤵ line pushes the item (a nested object with three properties) into the restaurant object using dot notation (the path follows the list of nested keys)
  // hypothetically, this should work the same way for each menus.type
  // if they are in a list, they won't be inserted in the correct place
  // would an `if` statement work?
  if (item.type === 'breakfast') {
    name.menus.breakfast.push(item);
  } else if (item.type === 'lunch') {
    name.menus.lunch.push(item);
  } else if (item.type === 'dinner') {
    name.menus.dinner.push(item);
  };

  // what am i trying to do here?
  // sort the provided item objects into the appropriate meal property
  // how to do that?
  // do they need to be sorted? the lunch push worked without any additional logic
  // maybe an `if` statement would suffice here
  // if ()


  // console.log('this is the array param:', object);
  // console.log('this is the pushed name:', namxe)
  // console.log('this is the expected output:', pizzaRestaurant.menus.lunch[0]);

  // how do I take the item and put it in the name??
  // name.menus.lunch.push(item); //this works! now how to make it dynamic to pass the next test...?!


  // next step is to make the .push dynamic and work with any of the meal category options
  // would this need a for loop?
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
