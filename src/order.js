function takeOrder(order, array) {
  if (array.length >= 3) {
    // console.log(array);
    return array;
  } else {
    // console.log(array);
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
  // console.log('List of orders:', orderList.join(', '));
  return orderList.join(', ');
};

function searchOrder(array) {
  for (var i = 0; i < array.length; i++) {
    
    if (array.includes(array[i].item)) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
