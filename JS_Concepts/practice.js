// /*SOLVE IT:---
// const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
// 👉️Answer:- [1, 2, 3, 4, 5, 6, 7];
// 👉️Use:- for loop, if else.
// 👉️Hint:- Nested loop.
// 👉️Don't use:- 1.another variable to store the array,
//                2.Array methods(push, pop etc).
// */

// const arr12 = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]

// function arr1(arr) {
//     // const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             arr.splice(i, 1)
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'test' || arr[i] === false) {
//             arr.splice(i, 1)
//         }
//     }

//     return arr;
// }
// console.log(arr1(arr12));


// function asa(arr) {
//     arr = arr.filter(e => { return e });
//     let str = ''
//     for (el of arr) {
//         if (typeof el == 'number') {
//             str += el
//         }
//     }
//     arr = str.split('').map(Number)
//     return arr
// }
// console.log(asa(arr12));
