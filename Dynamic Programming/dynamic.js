/*
Calculating values in the fibonacci sequence using
dynamic programming
What we know: Fib(n) = Fib(n - 1) + Fib(n - 2)
                Fib(2) = Fib(1) = 1
*/



//recursive solution(BAD)
function fib_recursive(n) {
    if (n <= 2) {
        return 1;
    }
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

console.log(fib_recursive(35));