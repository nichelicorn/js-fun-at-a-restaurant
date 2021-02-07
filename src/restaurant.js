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

function addMenuItem() {

};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
