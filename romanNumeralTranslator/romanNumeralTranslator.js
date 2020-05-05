/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  // create a total var initilize at 0
  let total = 0;
  // split the roman numeral (gives an array)
  let normal = romanNumeral.split('');
  // iterate ovet the array 
  for (let i = 0; i < normal.length; i++) {
    // create a current var to keep track of array length
    let currentIndex = normal[i];
    // use Digit Value for current idex
    let currentVal = DIGIT_VALUES[currentIndex];
    // create a next var for next index if applicable
    let nextIndex = normal[i + 1];
    // convert next to a value using Digit Value
    let nextVal = DIGIT_VALUES[nextIndex];
  // compare
    // if current is less than next
      // total is subtract/equal of the 2 values
     if (currentVal < nextVal) {
      total = currentVal - nextVal;
    } else {
      // if current is greater then next
      // total is add/equal of the 2 values
       total = currentVal + nextVal;
    } 
  }
  // return total
return total;
};

// I- roman numeral
// O- return number equal to roman numeral (+ / -)
// C-
// E- if RN is not a string return null

// tried console log saying undefined....

console.log(DIGIT_VALUES(I))