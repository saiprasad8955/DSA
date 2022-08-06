// Closures
// used for data privacy, memoize
function outer() {
    let count = 0;
    return function inner() {
        console.log(`${count++} is a counter`)
    }
}
var result1 = outer();




