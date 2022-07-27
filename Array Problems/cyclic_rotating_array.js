// cyclic rotating array in js
// rotate(arr,d) rotate elements by d 
// arr = [12, 3, 56, 7, 3, 2]
// rotate(arr, 2) arr = [3, 2, 12, 3, 56, 7]


// approach reverse whole array
// arr = [12, 3, 56, 7, 3, 2]
// rarr = [2, 3, 7, 56, 3, 12]
// arr = [2,3]  ==> [3, 2]
// arr = [7, 56, 3, 12]
// arr = [12, 3, 56, 7]
// reversal array [d,jb,jkdn.dj]
// then reverse d elements and whole array
// [(2, 3 reverse this also), (reverse this 7, 56, 3, 12) ]

function reverse(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--;
    }
    return arr
}

let arr = [12, 3, 56, 7, 3, 2]
console.log(reverse(arr));
// console.log(reverse(arr.slice(0, 2)))
// console.log(reverse(arr.slice(2)))

function rotate(arr, d) {
    let array = reverse(arr);                           // reverse whole array
    let rotatedElements = reverse(array.slice(0, d));   // reverse d ele
    let remainingEle = reverse(array.slice(d));         // reverse remaining elements
    // console.log(rotatedElements);

    return rotatedElements.concat(remainingEle)
}
let array = [12, 3, 56, 7, 3, 2]
console.log(rotate(array, 2));







// function rotatearr(arr) {
//     let left, right;
//     left = 0;
//     right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     }
//     return arr
// }


// const result = rotatearr([1, 3, 4, 5, 67, 8, 8, 9])
// console.log(result);

// function cyclic(arr, d) {
//     let dElements = rotatearr(arr.slice(0,d))
//     let ddElements = rotatearr(arr.slice(d))
//     dElements
//     ddElements
//     return [dElements,ddElements].flat()
// }
// console.log(cyclic([1, 3, 4, 5, 67, 8, 8, 9], 2));
// 9398233347


