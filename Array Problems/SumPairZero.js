// Checking sum zero - Problem 1
// [-5,-4,-3,-2,-1,0,2,4,6,8] --> input
// Normal Solution

function getSumPair(array) {
    for (let number of array) {               // O(n)
        // console.log("number")
        for (let i = 1; i < array.length; i++) {          // O(n)
            // console.log("hello")
            if (number + array[i] === 0) {
                return [number, array[i]]
            }
        }
    }
}                       // O(n^2) time complexity

let sum = getSumPair([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]);
// console.log(sum)



// Another Solution
function OptimiseSum(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }                           //O(n)      Linear time complexity
    }
}

const Pair = OptimiseSum([2, 7, 11, 15]);
console.log(Pair)




