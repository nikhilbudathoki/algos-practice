/*
Calculating values in the fibonacci sequence using
dynamic programming
What we know: Fib(n) = Fib(n - 1) + Fib(n - 2)
                Fib(2) = Fib(1) = 1
*/



// recursive solution(BAD)
function fib_recursive(n) {
    if (n <= 2) {
        return 1;
    }
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

// memoized solution
function fib_memo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = result;
    return result;
}

console.log(fib_memo(40));
