// find maxmum sum of three consecutive numbers
const arr =[8,1,3,9,6,2,11,7]

function maxSum(arr,k) {
    if(arr.length < 3){
    return ;
    }

    let currMax = Math.max();
    let totalSum = 0, leftWindowItemSum = 0;

    for(let i = 0; i<k ;i++){
        totalSum += arr[i]
    }

    currMax = totalSum;

    for(let i = k ;i<arr.length ;i++){
        leftWindowItemSum += arr[i-k];
        totalSum += arr[i];

        if(totalSum - leftWindowItemSum > currMax){
            currMax = totalSum - leftWindowItemSum
        }
    }
    return currMax
}

let result = maxSum(arr,3)
console.log(result);
