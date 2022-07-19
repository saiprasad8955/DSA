// const arr1 = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// function countZeroAndOne(arr){
//     let zerocount = 0 ;
//     let OneCount  = 0 ;
//     for(let i = 0 ; i< arr.length ;i++){
//         if(arr[i] == '0'){
//             zerocount = zerocount + 1 
//         }else if(arr[i] == '1'){
//             OneCount++
//         }
//     }
//   return { 'zero count' : zerocount, 'OneCount': OneCount}
// }
// const result = countZeroAndOne(arr1);
// console.log(result);




// const arr = [1,2,4,5];
// const a = arr.length
// let product = 1;
// for(let i=0; i< a; i++){
//     product = product * arr[i]   // ====>>>     product = 1 *1 ==>> 1
//     // product = 1 * 2 == 2    
//     // product = 2 * 4 == 8
//     // product = 8 * 5 == 40
    
// }

// console.log(product);
const arr1 = [1,2,3]
var plusOne = function(digits) {
    let digit = digits.join('');
    let digits1 = parseInt(digit) + 1;
    let digits2 = digits1.toString()
    return parseInt(digits2)
};
const result = plusOne(arr1);
console.log(result);
let sum = 0  
console.log(sum++)
console.log(--sum) 
console.log(sum)