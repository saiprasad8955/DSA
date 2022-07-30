var firstMissingPositive = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let min = 1;
    for (let el of nums) {
        if (el == min) min++
        if (el > min) return min
    }
    return min;
};


const result = firstMissingPositive([3, 4, 1, -1]);
console.log(result);



