// Sum of array elements

function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
}
console.log(sum([1, 2, 3, 4, 5]));


