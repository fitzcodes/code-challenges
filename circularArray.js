// Extra Assignment

/*  Write a 'circular array' with only a single loop (for, or while).
    I.E. Create a function that takes 2 parameters: an array, and an integer.
    - The integer is the number of times the array will be printed.
    - You must use the mod operator ( % ).
    - Circular Array
    - Just console.log the outpout on each loop iteration.
    - Separate each iteration with ( ----------- ) at this index. */

    function circularArray(array, numberOfLoops) {
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
      
      circularArray([1,2,3], 3);