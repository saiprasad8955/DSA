// BUBBE SORT ALGO
// The worst case scenario: quadratic O(n²)
// Best case scenario: linear O(n): when the input array is already sorted. Even in this case, we have to iterate through each set of numbers once.
// The space complexity of Bubble Sort is O(1).
let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let swap = false;
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (swap == false) break;
    }
    return arr
};

const arr = [2, 4, 6, 5, 1, 3]
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(bubbleSort(arr));

// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    let result = i * 3;

    // display the result
    console.log(`${result}`);
}
