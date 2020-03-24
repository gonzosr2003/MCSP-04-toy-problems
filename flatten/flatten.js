//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(array) {
   let newArray =array.reduce(function(accumulator, currentValue) {
       return accumulator.concat(currentValue)
   },[])
}

// reduce taking in an cb function using acc and current val of array
// should return acc(starting element) and combine with each el in array
//
flatten([1,['a', 2, [8, true], 7]])