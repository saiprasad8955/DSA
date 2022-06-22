// Sorting Using Recursion
// arr = [1,3,4,2,7]


sortedArray = []

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5]));

let i = 0;
let j = 1;
function sorting(arr) {

    // first check sorted array or not
    if (isSorted(arr)) {
        sortedArray = arr;
        return ;
    }
    else if (arr[i] < arr[j]) {
        i++;
        j++;
        sorting(arr);
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = 0;
        j = 1;
        sorting(arr);
    }

}

const result = sorting([1, 3, 4, 2, 7])
console.log(result);
console.log(sortedArray)