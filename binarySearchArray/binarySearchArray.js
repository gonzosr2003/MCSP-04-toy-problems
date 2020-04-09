/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
    // create var for array
        //low index // 0
    let low = 0;
        //high index //4
    let high = array.length - 1;
    // if low is less than high
    while(low < high)
        //where is the middle index?
            // create var for middle
                // array length / 2
        let middle = Math.floor((low + high) / 2);
    //if element at middle var is target
        if (middle === target) {
            return middle;
        }
    // yes - return middle
    // no - find out which side of array to continue search
    // if key is less than mid
    // make high var equal to mid -1
    // if key is greater than mid
    // make low var equal to mid + 1
    // resets search area in half
    
    // can i use recursion here? how do i implement that. 
    
    // create var for target
        // key is = to target
    // if target key is not in array
    // return null

};
// I- sorted array
// O- target index
// C- none
// E- if target not found return null
