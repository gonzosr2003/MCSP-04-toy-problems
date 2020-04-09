/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function(array) {
// sorry had convo w wife and wrote psuedo on boards while watching video over and over, rushing psuedo

    // question
        // is it better to just create pivot at middle of array?
            // so so pivot established 
            // no, taking extra time to compare start to end can save confusion when split into seperate array
// create var for array[0]
// create var for array.length -1
    // if start is less than end 
        // move down from end -1
        // compare again
       // if not switch
        // start becomes end
        // end becomes start
        // compare 
            // start < end - 1
        // continue until each as been compared--------shaky here

        // create pivot spot
        // push left of pivot into array


        // push right of pivot into array



        // return arrays + pivot 
// i think line 22-30 would be the recursion point w some tweaking. 


};
// I - array 
// O - sorted array
// C - recursion to sort the 2 halves
// E - same valued elements

