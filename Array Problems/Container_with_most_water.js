// 11. Container With Most Water


let container = (arr) => {
    let maxArea = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let currentArea = Math.min(arr[left], arr[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea)
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));