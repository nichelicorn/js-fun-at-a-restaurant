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
  if (type === 'breakfast') {
    name.menus.breakfast.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (type === 'dinner') {
    name.menus.dinner.splice(itemName);
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
  } else if (!type.includes(itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
