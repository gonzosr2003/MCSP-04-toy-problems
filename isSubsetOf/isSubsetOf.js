/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  // your code here
  // iterate over array
  for ( var i = 0; i < arr.length; i++) {
    // if array is equal to var array
      // how do we iterate over var that subset is being called on?
        helper function 
      if (arr[i] ==== ???) {
      // return true
      return true;
    }
  }
        // else return false
        
        // NOT DONE AT ALL
  
};

// I - array
// O - boolean
// C - disregard duplicates
// E - empty set, neither array not contain obj or elements

