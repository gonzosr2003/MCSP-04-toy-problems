// Your task is to reimplement the function map.

// As input, map takes two parameters.

// An array
// A function
// As output, map creates a new array with the results of calling
// a provided function on every element in the calling array.

// map should call its input function on each element contained
// in the input array. The result of each call should be stored in
// a new array. map then returns that new array.
// DO NOT use array.map

// To help you implement map, observe the examples below.

// map([1,2,3],function doubler(element){
//   return element*2;
// }) //=> [2,4,6]

// map(['a','b','c'],function addA(element){
//   return element+'a';
// }) //=> ['aa','ba','ca']

function map(array, func) {
  // Your work here!
  function map(array, func) {
    var newArray = [];
    for (var i = 0; i < array.length; i ++) {
    newArray.push(func(array[i]));
    } return newArray;
    }
}
