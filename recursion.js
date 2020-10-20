// We want to know the sum of the first N integers. ie: n=5, then 5 + 4 + 3 + 2 + 1 = 15

// First find closed form, then write recursive, then factorial.

//closed
function closedSumFirstN(n) {
    const num = n * (n + 1);
    return num / 2;
}


//recusrion
function recursiveSumFirstN(n) {
    if (n <= 1) {
        return 1
    }
    return recursiveSumFirstN(n - 1) + n;
}

//factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Fibonacci
function Fibonacci(n) {
if (n <= 0) {
    return 0;
 }
 if (n === 1) {
     return 1;
 }
 return Fibonacci(n - 1) + Fibonacci(n - 2);
}




//tests
let test = 15;

console.log(closedSumFirstN(test));
console.log(recursiveSumFirstN(test));
console.log(factorial(test));
console.log(Fibonacci(test));