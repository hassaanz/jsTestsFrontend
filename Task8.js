/**
 * Task 8: Sum all integers inside the nested Array
 */

function arraySum(i) {
  var sum = 0;
  for (var j = 0; j < i.length; j++) {
    if (typeof i[j] == 'object')
      sum += arraySum(i[j]);
    else
      sum += i[j];
  }
  return sum;
}

var added = arraySum([[3,2],4,5, [1, [1,6,1]], 1]);
console.log(added);
