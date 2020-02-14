// Given an array of strings, return all strings concatenated together.

// DO NOT use strings.reduce() or strings.join('')

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// EXAMPLE
// strings: [ "a", "b", "c" ] -->	"abc"
// strings: [] --> 	""

function stringReducer(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i];
  }
  return str;
}
