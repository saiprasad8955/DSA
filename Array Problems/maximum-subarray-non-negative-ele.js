// Maximum Subarray without negative elements
function subarray(nums) {
    let ans = 0;
    let sumWindow = 0;
    for (let i = 0; i < nums.length; i++) {
        sumWindow += nums[i];
        if (sum_wiWow < 0) sumWindow = 0;
        ans = ans > sumWindow ? ans : sumWindow;
    }
    return ans;
}

console.log(subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



var maxSubArray = function (nums) {
    if (nums.length == 0) return 0;
    let result = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = sum > result ? sum : result
        sum = sum < 0 ? 0 : sum;
    }
    return result;
};