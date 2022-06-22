
// console.log('ss')
// function cs1(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         let isSquare = false;
//         for (let j = 0; i < arr2.length; j++) {
//             if (arr1[i] * arr1[i] === arr2[j]) {
//                 isSquare = true
//             }
//             if(j === arr2.length -1){
//                 if(!isSquare){
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }

// let re =cs1([1, 2, 3, 4], [1, 4, 9, 16])
// console.log(re)



function square(arr1, arr2) {
    let map = new Map()
    let map1 = new Map()
    for (let ele of arr1) {
        map[ele] = (map[ele] || 0) + 1
    }

    for (let ele of arr2) {
        map1[ele] = (map1[ele] || 0) + 1
    }

    // console.log(map)
    // console.log(map1)
    for (let key in map) {

        if (!map1[key * key]) {
            return false
        }

        if (map[key] !== map1[key * key]) {
            return false
        }
    }
    return true;
}
let result = square([1, 2, 3, 4], [1, 4, 9, 16])
console.log(result)
