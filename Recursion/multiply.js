// Multiplication of array elements
function multiply(arr, n) {
    if (n == 0) {
        return arr[n]
    } else {
        return (arr[n] * multiply(arr, n - 1))
    }
}

console.log(multiply([1, 4, 2, 1, 1], 4));

