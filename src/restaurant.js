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
  // remove an item from a menu property
  // parameters are name to call createRestaurant(); itemName is provided as a string; type is provided as a string
  // the test is creating three new menu items, one being assigned to each array
  // the test is then calling removeMenuItem() and requiring that the breakfast item is removed
  // remove breakfast item
  name.menus.breakfast.splice(itemName);
  return `No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
