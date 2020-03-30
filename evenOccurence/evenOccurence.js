/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 
 * console.log(onlyEven); //  4
 */
// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);

var evenOccurrence = function(array) {
    // create a count obj
    var count = {};
    // get each element(forEach method)
    array.forEach(function(value, index) {
      // Store each value within the object to keep count
      count[value] = count[value] + 1 || 1;
    });
    // loop through input array 
    for (var i = 0; i < array.length; i++) {
      //find first occurence of an even count
      var current = array[i];
      // Check to see if the current character inside storage is even
      if (count[current] % 2 === 0) {
        //return current character
        return current;
      }
    }
    // If no even occurrence found, return null
    return null;
}
  var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
  console.log(onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))
