/**
 * Task 5: Explain how "this" works in this particular scenario (how iPad is logged, followed by iPhone)
 */
 /**
  * Solution
  * --------
  * Theory
  * ------
  * Understanding the value of this is pretty important if you are working on javascript.
  * In global execution context, this refers to the Global object.
  * The value also varies when strict mode is enabled. (not explained)
  * The value of this could change on one of the following principles.
  * Inside a function, the value of this depends on how the function is called.
  * - If a function is called in a simple way (eg fn()). The value of this is not changed
  * and remains as it is.
  * - When a function is called as a method of an object,
  * its this is set to the object the method is called on.
  * - value of this can explicitly be defined when functions are called
  * using .bind and .apply
  * - On DOM even handler, this refers to the element where the event occured.
  * - Value of this also behaves different on constructiors and prototype methods.
  *
  * In the particular scenario, getProductName() is returning this.product.
  * The logs show different values because the context of calls is different and
  * value of this differs on each call.
  * on first console.log(obj.prop.getProductName()) - this value refers to obj.prop
  * hence 'iPad' is logged.
  * on second console.log(test()) - this value refers to the global object. Hence
  * this.procuct value woudl be iPhone.
  *
  * If we want to log iMac, we can use console.log(test.call(obj))
  */
var product = 'iPhone';
var obj = {
   product: 'iMac',
   prop: {
      product: 'iPad',
      getProductName: function() {
         return this.product;
      }
   }
};
console.log(obj.prop.getProductName());
var test = obj.prop.getProductName;
console.log(test());
