// Closures
// Used for data privacy, memoize
// maintaining state with ASYNC WORLD

function outer() {
    let count = 0;
    return function inner() {
        console.log(`${count++} is a counter`)
    }
}

var result1 = outer();
