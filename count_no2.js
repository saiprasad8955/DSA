//  COUNT NO OF TWO's 
const arr = [2, 4, 5, 3, 2, 2, 5, 6, 7, 7, 7, 7];

function countSum(arr) {
    let count = 0;
    for (let el of arr) {
        if (el == '2') {
            count++;
        }
    }
    return count;
}
console.log(countSum(arr));



//  COUNT NO OF ONE's and TWO's 
const arr1 = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
function countZeroAndTwos(arr) {
    let twocount = 0;
    let onecount = 0;
    for (el of arr) {
        if (el == '0') {
            onecount++;
        } else if (el == '1') {
            twocount++
        }
    }
    return { 'Two Count': onecount, 'One Count': onecount }
}

console.log(countZeroAndTwos(arr1));

