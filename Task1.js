/**
 * Task 1: Write a function that repeats the String
 * with the following output:
 * 'Mozio'.repeatify(3); // 'MozioMozioMozio';
 */

/*
 * Solution 1
 * String.prototype.repeat() is present in the docs but
 * it might not be compatible in all the browsers.
 */
function repeatify(val) {
  return str.repeat(val)
}
String.prototype.repeatString = repeatify;
console.log('Mozio'.repeatString(3));

/*
 * Solution 2
 * Array.prototype.join can be used to join the string
 * with itself.
 */
function repeatify1(num) {
  return (num < 0) ? "" : new Array(num+1).join(this);
}
String.prototype.repeatString = repeatify;
console.log('Mozio'.repeatString(3));
