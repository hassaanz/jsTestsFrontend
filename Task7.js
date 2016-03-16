/**
 * Task 7: Return the longest String in the Array
 */
function longestString(i) {
  var longest = i[0];
  for (var j = 1; j < i.length; j++) {
    longest =  i[j].length > longest.length ? i[j] : longest;
  }
  return longest;
}
var longest = longestString([
  'lemonade',
  'coca-cola',
  'pepsi',
  'red bull'
]);
console.log(longest);
