// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  //write code here
    // use split() method
let newTime = timeStr.split(' : ');
        // create hour var
let newHour = newTime[0]
        // create min var
let newMin = newTime[1]
  // create a converted var
let hurryUpAndWait;
  // if timeStr is less than 12 add 12 converted to military time
  if (newHour > 0 && newHour < 12) {
    hurryUpAndWait = 
  }
      // if more then 12 subract 12
    // min go unchanged 
                    // how do i deal w am pm? since i didnt assign a var does it come along? pop?
  // reutrn  
  

  
}
// console.log(`Test1 expected ${militaryTime('12:00am')} to be 00:00`);
// console.log(`Test2 expected ${militaryTime('7:47pm')} to be 19:47`);
// console.log(`Test3 expected ${militaryTime('12:01am')} to be 00:01`);
// console.log(`Test4 expected ${militaryTime('9:15am')} to be 09:15`);
// console.log(`Test5 expected ${militaryTime('1:23am')} to be 01:23`);
// console.log(`Test6 expected ${militaryTime('3:00pm')} to be 15:00`);
// console.log(`Test7 expected ${militaryTime('12:00pm')} to be 12:00`);
// console.log(`Test8 expected ${militaryTime('04:00')} to be 04:00`);
// I string 
// O time in military format
// C 
// E 

