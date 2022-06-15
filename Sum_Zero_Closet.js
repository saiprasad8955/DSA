//find the pairs in an shorted Array whose sum is closest to x ---time complexity O(n)
let arr = [1, 2, 5, 8, 9, 14]
function closestSum(arr,x) {
    let left = 0;
    let right = arr.length - 1;
    let resultLeft = 0, resultRight = 0;
    let distance = Number.MAX_VALUE;
// console.log(distance);
    while (left < right) {
        if (Math.abs(arr[left] + arr[right] - x) < distance) {
            resultLeft = left
            resultRight = right
            distance = Math.abs(arr[left] + arr[right] - x)
        }
        if (arr[left] + arr[right] > x){
            right--
        } 
        else {
            left++;
        }
    }
    return [ arr[resultLeft], arr[resultRight] ]

}

console.log(closestSum(arr,20));