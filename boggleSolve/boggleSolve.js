// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

const boggleSolve = str => {
    // create total var
    let sum = 0;
    // split str 
    const strValue = str.split(' ');
    // assign value
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;
    let f = 6;
    let g = 7;
    let h = 8;
    let i = 9;
    let j = 10;
    let k = 11;
    let l = 12;
    let m = 13;
    let n = 14;
    let o = 15;
    let p = 16;
    let q = 17;
    let r = 18;
    let s = 19;
    let t = 20;
    let u = 21;
    let v = 22;
    let w = 23;
    let x = 24;
    let y = 25;
    let z = 26;
    // iterate over str
    for (let i = 0; i < strValue.length; i++) {
        let curIndex = strValue[i];
        // each index together
        sum += curIndex
    }
    // return value
    return sum;
};


// I - string
// O - return sum of value letter
// C - 
// E -