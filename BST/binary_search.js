const arr = [2, 3, 4, 10, 40];
// console.log(arr[7]);

function binarySearch(arr, start, end, num) {
    if (end >= start) {
        // find middle elemnt of array
        let mid = Math.floor((end + start) / 2);

        // if Num Matches then return mid itself
        if (num == arr[mid]) { return mid; }
        // and if num greater than arr of mid then just mid + 1 for right
        else if (num > arr[mid]) { return binarySearch(arr, mid + 1, end, num); }
        else if (num < arr[mid]) { return binarySearch(arr, start, mid - 1, num); }
    }
    return -1;
}
let n = arr.length - 1
console.log(binarySearch(arr, 0, n, 40));

// Time Complexity: O(log n)
// Auxiliary Space: O(log n)
