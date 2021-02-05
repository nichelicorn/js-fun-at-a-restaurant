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

function refundOrder() {

};
// : expected 3 to equal 2; this is expecting that once deliveryOrders has 3 orders, the first order should be removed? I think this because when the function is called on line 154 of the test, it includes a number that corresponds to the first order. Next, on line 157, the `assert.deepEqual` statement is returing the array of deliveryOrders, and it is displaying a value of just var order2 && order3
// When the function is invoked, 2 arguments are passed through (will want to set up two parameters)


module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
