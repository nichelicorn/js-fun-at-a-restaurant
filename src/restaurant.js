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
  // console.log('this is the object:', name);

  if (item.type === 'breakfast' && name.menus.breakfast.includes(item) === false) { //object does not include the item//
    name.menus.breakfast.push(item);
  } else if (item.type === 'lunch' && name.menus.lunch.includes(item) === false) {
    name.menus.lunch.push(item);
  } else if (item.type === 'dinner' && name.menus.dinner.includes(item) === false) {
    name.menus.dinner.push(item);
  };
};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
