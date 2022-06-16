// UNIQUE NUMBER
// [2,4,5,8,4,2,3,43,3,4,667,3,34,7,86,5,5,5,5,5,4,3,3,3,2,2,2]
// i = 0; j = 1
// array[i] !== array[j]
// i++;
// array[i] = array[j]


function uniqueNumbersInArray(array) {
    console.log(array.length)
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    } else {
        throw new Error("Array is Empty")
    }
}
const numbers = uniqueNumbersInArray([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 12]);
console.log(numbers);

// console.log(''.charCodeAt(0))

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// var cnt = Array.from({length: 4}, (_, i) => 0);
// var arr12 = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// console.log(arr12)