/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function(rounds) {
  // create let for R P S (OG array)
  let ogArray = [R, P, S]
  // round 1 return OG array
  if(rounds === 1) {
    return ogArray;
  }
  // use inter recursion function takes in array
  let helper = (arr) => {
    // create empty array
    var newArray = [];
    // iterate over input array
    for(var i = 0; i < arr.length; i++) {
      // iterate over OG array
      for(var k = 0; k< ogArray.length; k++)
      // input array[i] + OG[i] = newStr
      let newStr = arr[i] + ogArray[i];
        //push new string into empty array
        newStr.push(newArray);
    }
  } 
      // base case = if rounds 0
      // decrement down
  // create let to return array
    // return array
  // Your work here!
};
// [r,p,s] => [RR, RP, RS, PP, PR, PS, SS, SR, SP]


// I - rounds
// O - array of string
// C - # of rounds
// E - if rounds === 0

// diagram
  // 0 = "not playing"
  // 1 = [R, P, S]
  // 2 = [RR, RP, RS, PP, PR, PS, SS, SR, SP]
  // 3 = [RRR,RRP,RRS,27 OTHERS LIKE ABOVE ADD R/P/S]
  // 4 = 27 * 3

