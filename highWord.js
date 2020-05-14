// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.
    //Example
        // Input: ‘man i need a taxi up to ubud’ -> Output: ‘taxi’
        // Input: ‘what time are we climbing up the volcano’ -> Output: ‘volcano’
        // Input: ‘take me to semynak’) -> Output: ‘semynak’

        var wordScore = function(str) {
            // create a total value
            let total = 0;
            // create alphabet value
            const alphabet= {
                a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
                g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
                m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
                s: 19, t: 20, u: 21, v: 22, w: 23, x: 24,
                y: 25, z: 26
            }
            // split string by words
            var words = str.split(" ");
            for (var i = 0; i < words.length - 1; i++) {
                words[i] += " ";
            }
            console.log(words[i]);
            // split words at index
            let word1 = words[0]
            // assign value to words
            let wordOneValue = alphabet[word1]
            console.log(wordOneValue);
            // store total for all 
            // compare
            // return word with greatest value
            
            // total += alphabet[words[0]]
            // console.log(total)
        
        }
        
        // I - str
        // O - str
        // C - same score return word that appears earliest in the string
        // E - all letters will be LC and all inputs will be valid
        wordScore('how are you doing')