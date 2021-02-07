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
  // console.log('this is the chain:', name.menus);
  // console.log('the chain can\'t pick up the type:', name.menus.includes(type));

  // this ⤵ logic seems correct - this will make the function pass tests 1 and 4, but now fails 2 and 3
  if (!type.includes(itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  };

  if (type === 'breakfast') {
    name.menus.breakfast.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (type === 'lunch') {
    name.menus.lunch.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (type === 'dinner') {
    name.menus.dinner.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  }
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
