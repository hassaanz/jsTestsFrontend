/**
 * Task 9: Use the function below to write your own
 * Array.prototype.map equivalent to double each number
 */
var items = [1,5,8,2,6];

function map(collection, fn) {
  var retArr = [];
  collection.forEach(function(elem) {
  retArr.push(fn(elem));
  });
  return retArr;
}

var mapped = map(items, function (item) {
  return item * 2;
});

console.log(mapped);
