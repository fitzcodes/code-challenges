// Pass by reference - 
// vs.
// Pass by value - 

// O(n^2)
// Do not manipulate the current array!
// Return a new, sorted array. 
const bubbleSort = arr => {
    // Make a copy of array, NEW memory address
    const sortedArr = [...arr];  // pass vy value

    const len = arr.length;
    let temp; // used for the swap
    let totalSwaps = 0;
    let leftValue, rightValue;

    for (let idx = 0; idx < len ; idx++) {

        // "Bubble"
        for (let bubble = 0; bubble < len -1; bubble++) {
            leftValue = sortedArr[bubble];
            rightValue = sortedArr[bubble + 1];

            if (leftValue > rightValue) {
                // Perform an "in-place swap"
                temp = leftValue;
                sortedArr[bubble] = rightValue;
                sortedArr[bubble + 1] = temp;

            }
            
        }

    }
    
    return sortedArr;
};

const orig = [8, 1, 3, 10, 2];

const sorted = bubbleSort(orig);

console.log("original", orig);
console.log("sorted", sorted);