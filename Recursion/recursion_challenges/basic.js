/*
power accepts a base, an exp and returns the power of the
base to the exp
*/
function power(base, exp) {
    if (exp === 0) return 1;

    return base * power(base, exp - 1);
}

/*
factorial accepts an number n and returns factorial of it
*/
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

/*
productOfArray takes in an array of ints and returns product
of them all
*/
function productOfArray(arr) {
    if (arr.length === 0) return 1;

    return arr[0] * productOfArray(arr.slice(1));
}

/*
recursiveRange accepts an int n and adds up all numbers from 0 to n
*/
function recursiveRange(n) {
    if (n === 0) return 0;

    return n + recursiveRange(n - 1);
}

/*
fib accepts a number and returns the nth number in the fibonacci sequence
*/

function fib(n) {
    if (n === 1 || n === 2) return 1;

    return fib(n - 1) + fib(n - 2);
}
