//  Fibonacci Series using Recursion
let n = 9;

// Function returns the Fibonacci number
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Function call
console.log(fib(n));
