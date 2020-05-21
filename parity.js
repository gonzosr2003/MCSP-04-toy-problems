// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely comprised 
// of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// nums = [2, 4, 0, 100, 4, 11, 2602, 36];
// Should return: 11 (the only odd number)

nums = [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const parity = (nums) => {
    // create a even array
    let even = [];
    // create a odd array
    let odd = [];
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // push evens into array
        if ((nums[i] % 2) === 0) {
            even.push(nums[i]);
            // console.log(even);
        }
        else {
            // push odds into array
            odd.push(nums[i]);
            // console.log(odd);
        }
    }    
    // compare length
            if (even.length > odd.length) {
                // return shortest length arrray
                return odd;
            } else {
                return even;
            }
}
console.log(parity(nums))

// I - int of even or odd
// O - num that isnt majority even or odd
// C - 
// E - 