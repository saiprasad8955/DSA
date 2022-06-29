// function bubblesort(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // let temp  = arr[j]
//                 // arr[j]= arr[j+1]
//                 // arr[j+1]  = temp
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }

//         }
//     }
//     return arr
// }
function bubblesort(arr) {
    for (let i = 0 ; i <= arr.length -1 ; i++) {
        let swap =false;
        for (let j = 0; j <= arr.length -2; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp  = arr[j]
                // arr[j]= arr[j+1]
                // arr[j+1]  = temp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap =true
            }
            if(swap == false){break;}
        }
    }
    return arr
}
console.log(bubblesort([2, 4, 6, 5, 1, 3]));
