// Count largest sum of consecutive number
// [1,2,3,4,3,2,5,6,7,8]
// Largest
// arr.length - number + 1 ====>>> loop iteration

function largestSumOfConsecutiveNumber(arr, num) {

    if (num > arr.length) {
        throw new Error("Number should be less than array length")
    } else {

        let max = 0;
        for (let i = 0; i < arr.length - num + 1; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                console.log("InnerL " + i + " OuterL " + j)
                temp = temp + arr[i + j]
            } 

            if (temp > max) {
                max = temp;
            }
        }
        return max
    }
}

const result = largestSumOfConsecutiveNumber([1, 2, 3, 4, 3, 2, 5, 6, 7, 8], 5)
console.log(result)


// 10 - 5 +1



// function trueValue(arr){
// // return arr.filter((x)=>x==true).length   
// let count =0; 
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == true){
//             count++;
//         }
//     }
//     return count;
// }
// const results = trueValue([true])
// console.log(results)