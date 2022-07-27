const arr = [2, 3, 4, 10, 40];
// console.log(arr[7]);

function binarySearch(arr, start, end, num) {
    if (end >= start) {
        // find middle elemnt of array
        let mid = 1 + Math.floor(end - start) / 2;

        // if Num Matches then return mid itself
        if (num == arr[mid]) { return mid; }
        // and if num greater than arr of mid then just mid + 1 for right
        else if (num > arr[mid]) { return binarySearch(arr, mid + 1, end, num); }
        else if (num < arr[mid]) { return binarySearch(arr, start, mid - 1, num); }
    }
    return -1;
}
let n = arr.length-1
console.log(binarySearch(arr, 0, n, 10));

// Time Complexity: O(log n)
// Auxiliary Space: O(log n)


// const arr1 = [2, 3, 4, 10, 40];
// function binarySearch1(arr,num) {
//     let start=0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         // find middle elemnt of array
//         let mid = Math.floor((start+end)/2)
//         // if Num Matches then return mid itself
//         if (num == arr[mid]) { return mid; }
//         // and if num greater than arr of mid then just mid + 1 for right
//         else if (arr[mid] > num) { return binarySearch(arr, start, mid - 1, num); }
//         else if (arr[mid] < num) { return binarySearch(arr, mid + 1, end, num); }
//     }
//     return -1;
// }


// console.log(binarySearch1(arr1,10));