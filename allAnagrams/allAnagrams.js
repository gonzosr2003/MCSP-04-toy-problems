/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  // use a recurison method
  function NeedMoreOfficeHoursOnRecursion (start, leftover) {
    //base case
    if (leftover.length === 1) {
      return [start + leftover];
    } else {
        // output them as an aray
        var output =[];
      // iterate over string
      for (var i = 0; i < leftover.length; i++) {
        // call recursion on self 
        //use i as start; will use first i / need i plus next letter    
        var startPlusNext = NeedMoreOfficeHoursOnRecursion(leftover[i], leftover.substr(0, i) + leftover.substr(i + 1))
        // push to array
        output.push(start + leftover);
      }
       // return array
  return output;
    }
  } 
};
// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.