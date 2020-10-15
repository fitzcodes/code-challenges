// Examples of Big O in terms of....

// Constant Time: O(1)
function random(array) {
    console.log(array[0]);
}

random([1, 2, 3, 4, 5, 6]);


// Linear Time: O(n)
function practice(array) {
    for(let integer = 0; integer < array.length; integer++) {
        console.log(array[integer]);
    }
}

practice([1, 2, 3, 4, 5, 6]);


// Polynominal time: O(n^k)
function wowsers(array) {
    for(let integer = 0; integer < array.length; integer++) {
        for(let intTwo = 0; intTwo < array.length; intTwo++) {
            console.log(array[integer] + array[intTwo]);
        }
    }
}

wowsers([1, 2, 3, 4, 5, 6]);


// Extra Assignment

/*  Write a 'circular array' with only a single loop (for, or while).
    I.E. Create a function that takes 2 parameters: an array, and an integer.
    - The integer is the number of times the array will be printed.
    - You must use the mod operator ( % ).
    - Circular Array
    - Just console.log the outpout on each loop iteration.
    - Separate each iteration with ( ----------- ) at this index. */

    function arrayLoop(array, numberOfLoops) {
        for(let integer = 0; integer < array.length * numberOfLoops; integer++) {
          if(integer % array.length != 0 || integer === 0) {
            console.log(array[(integer % array.length)]);
          } else {
            console.log('------');
            console.log(array[(integer % array.length)]);
          }
        }
        console.log('------')
      }
      
      arrayLoop([1,2,3], 3);