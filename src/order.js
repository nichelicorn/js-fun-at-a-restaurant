function takeOrder(order, array) {
  if (array.length >= 3) {
    // console.log(array);
    return array;
  } else {
    // console.log(array);
    array.push(order);
  }
};
// fxn should add new orders to an empty array √
// when called, the function should take in two arguments, `order` and `array` √
// when called, the `order` should be pushed into the empty `array` √
// don't forget the return statement! √
// array should not be able to hold more than three Objects √
// if array is = 3, do nothing; else push the new order to the array √

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
