/*
Calculating values in the fibonacci sequence using
dynamic programming
What we know: Fib(n) = Fib(n - 1) + Fib(n - 2)
                Fib(2) = Fib(1) = 1
*/



// recursive solution(BAD)
function fibRecursive(n) {
    if (n <= 2) {
        return 1;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// memoized solution
function fibMemo(n, memo = []) {
    // In JS, out of index in array is undefined
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    // In JS, can assign index out of array's length
    memo[n] = result;
    return result;
}

// bottom up approach
function fibBottomup(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        // fibNums[] stores results instead of call stack
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fibRecursive(5)); // Don't increase the number!
console.log(fibMemo(10000)); // Might have call stack error
console.log(fibBottomup(10000)); // Lower space complexity