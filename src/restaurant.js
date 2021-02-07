function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
};

function addMenuItem(name, item) {
  if (item.type === 'breakfast' && name.menus.breakfast.includes(item) === false) {
    name.menus.breakfast.push(item);
  } else if (item.type === 'lunch' && name.menus.lunch.includes(item) === false) {
    name.menus.lunch.push(item);
  } else if (item.type === 'dinner' && name.menus.dinner.includes(item) === false) {
    name.menus.dinner.push(item);
  };
};

function removeMenuItem(name, itemName, type) {
  // console.log('this is the name:', name);
  // console.log('this is the itemName:', itemName);
  // console.log('this is the type:', type);
  // console.log('this is the chain:', name.menus['type'], 2, name.menus.type);
  // console.log('the chain can\'t pick up the type:', name.menus.includes(type));

  // if (name.includes(itemName)) {
  //   name.menus.breakfast.splice(itemName);
  //   return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  // }

  // this ⤵ logic seems correct - this will make the function pass tests 1 and 4, but now fails 2 and 3
  // if (!type.includes(itemName)) {
  //   return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  // }

// how can these two statements be combined into one?

  // name.menus.breakfast.splice(itemName);
  // name.menus.breakfast = [];
  // name.menus.dinner = [];
  // name.menus['type'] = [];
  // return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`

  if (type === 'breakfast') {
    name.menus.breakfast.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (type === 'dinner') {
    name.menus.dinner.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (!type.includes(itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }

  // for (var i = 0; i < name.length; i++) {
  //   console.log(name.menus.type[i]);
  // }
  // console.log(name.menus.type[i]);
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
