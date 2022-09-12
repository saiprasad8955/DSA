const arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];


function binarySearch(arr, start, end, num) {
    if (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (num === arr[mid]) return mid;
        else if (num > arr[mid]) return binarySearch(arr, mid + 1, end, num);
        else return binarySearch(arr, start, mid - 1, num)
    }
    return -1;
}
let s = 0;
let n = arr.length - 1

console.log(binarySearch(arr, s, n, 110));
