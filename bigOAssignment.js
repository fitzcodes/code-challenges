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


