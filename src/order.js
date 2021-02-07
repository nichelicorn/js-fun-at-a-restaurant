function takeOrder(order, array) {
  if (array.length >= 3) {
    return array;
  } else {
    array.push(order);
  }
};

function refundOrder(num, array) {
  array.splice(num - 1, 1)
};

function listItems(array) {
  var orderList = [];
  for (var i = 0; i < array.length; i++) {
    orderList.push(array[i].item);
  }

  return orderList.join(', ');
};

function searchOrder(array, item) {
  var orderList = [];
  for (var i = 0; i < array.length; i++) {
    orderList.push(array[i].item);
  };

  if (orderList.includes(item)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
