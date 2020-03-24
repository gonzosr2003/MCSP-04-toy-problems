// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(string) {
    let singleElement = string.split(''); //breakdown string
    let storage = []; // ascending by character
    let count = 0; 
    let tempHold = []; //compare and hold elements
        //iterate over length
        for(var i = 0; i < singleElement.length; i++) {
            // 
            let valueOf = tempHold.indexOf(singleElement[i]);
            if (valueOf === 0) {
                // start counting frequency of element
                tempHold[count] = singleElement[i];
                // add to element count
                count += 1
                console.log(count);
            }
            // 
        }

}
