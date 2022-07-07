// maxium sum of two ele of array
// maintain two variable largest and secondlargest


// largest = -Infinity
// secondlargest = -Infinity

// iterate loop and 
// if( number > largest ) {
// largest = number;
// secondlargest = largest
// }else{
// if (arr[i] > secondlargest) { secondlargest = arr[i] }
// }

let arr = [12, 23, 34, 3, 56, 89];

function maxSumOfTwoEle(arr) {
    let max = Math.max()
    let secondmax = Math.max()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            secondmax = max;
        } else {
            if (arr[i] > secondmax) {
                secondmax = arr[i]
            }
        }
    }

    return ( max + secondmax )
}

console.log(maxSumOfTwoEle(arr));
