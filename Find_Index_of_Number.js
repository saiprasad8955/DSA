// find A number index
// [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// Divide and conqueror
// midIndex 
// min + max /2
// arr[midIndex] < num ===> { left -->> midIndex + 1 }
// arr[midIndex] > num ===> { right -->> midIndex - 1 }

function searchALog(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {

        let midIndex = Math.floor((left + right) / 2);

        if (arr[midIndex] < num) {

            left = midIndex + 1;

        } else if (arr[midIndex] > num) {

            right = midIndex - 1;

        } else {

            return midIndex

        }
    }
    return -1;
}

const result = searchALog([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log("result", result);