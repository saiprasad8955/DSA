const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function reverseArray(arr) {
    // arr = arr.sort()
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // arr[right] = arr[left];
        left++;
        right--;
    }

    return arr
}




console.log(reverseArray(arr))