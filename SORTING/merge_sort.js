// MERGE SORT

let arr = [5, 3, 7, 6, 2, 9]

// function merge(array1, array2) {
//     let combined = []
//     let i = 0
//     let j = 0
//     while (i < array1.length && j < array2.length) {
//         if (array1[i] < array2[j]) {
//             combined.push(array1[i])
//             i++
//         } else {
//             combined.push(array2[j])
//             j++
//         }
//     }
//     while (i < array1.length) {
//         combined.push(array1[i])
//         i++
//     }
//     while (j < array2.length) {
//         combined.push(array2[j])
//         j++
//     }
//     return combined
// }

// function mergeSort(array) {
//     if (array.length === 1) return array

//     let mid = Math.floor(array.length / 2)
//     let left = array.slice(0, mid)
//     let right = array.slice(mid)

//     // recursive function for continously cutting array into half
//     return merge(mergeSort(left), mergeSort(right))
// }

// console.log(mergeSort(arr));


// ANOTHER METHOD

// function merge(array1, array2) {
//     let combined = []
//     let i = 0
//     let j = 0
//     while (i < array1.length && j < array2.length) {
//         if (array1[i] < array2[j]) {
//             combined.push(array1[i])
//             i++
//         } else {
//             combined.push(array2[j])
//             j++
//         }
//     }
//     return [...combined, ...array1.slice(i), ...array2.slice(j)]
// }

// console.log(mergeSort([3, 1, 78, 43]));


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));
