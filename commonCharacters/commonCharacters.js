/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  // create a var that split a string to iterate thru
  var split = string1.split('');
  var split2 = string2.spit('');
  // create a var for empty spaces
  var answer = '';
  //iterate thru split array
  for(var i = 0; i < split.length; i++){
    // create var for split at i
    var eachSplit = split[i];
    }
    for (var j = 0; j < split2.length; j++) {
      var eachSplit2 = split2[i];
    }
     // filter for duplicate or empty elements
     if(eachSplit.includes(eachSplit2) && eachSplit !== ' ') {
      var filtered // how do i make that a thing?
  }
    if(filtered.length === eachSplit2.length) {
      answer += 
    }
  return answer;
};
