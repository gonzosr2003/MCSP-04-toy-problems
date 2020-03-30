//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

// TC is linear
// create a function that takes in an array(hold value)
function flatten(array) {
    //create an output array
    let output = [];
    //creat recursion function
    function helper(arr) {
        //iterate over the input array
        for (let i =o; i < arr.length; i++){
            //if element is an array
            if (Array.isArray(arr[i])) {
                //call function on that element
                helper(arr[i]);
        } else {
        //push element into output array
        output.push(arr[i]);
        }
    }
}
    // here because computer will jumps to this and then goes back to helper function
    helper(array);        
    //return an output array
    return output;
}
        