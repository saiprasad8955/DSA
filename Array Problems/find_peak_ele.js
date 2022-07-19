// Find peak element of array

function peakElementArray(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        mid = Math.floor(left + right / 2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return left;
}


let arr = [10, 20, 30, 40, 50]
console.log(peakElementArray(arr))