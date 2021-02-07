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
  if (item.type === 'breakfast') {
    name.menus.breakfast.push(item);
  } else if (item.type === 'lunch') {
    name.menus.lunch.push(item);
  } else if (item.type === 'dinner') {
    name.menus.dinner.push(item);
  };
};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
