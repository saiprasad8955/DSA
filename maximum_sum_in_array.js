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

function sum(arr) {
    let largest       = Math.max()
    let secondlargest = Math.max()

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest       = arr[i];
            secondlargest = largest
        } else {
            if (arr[i] > secondlargest) {
                secondlargest = arr[i]
                // console.log(secondlargest);
            }
        }

    }
    return (largest + secondlargest)
}



let arr = [12, 23, 34, 3, 56, 89];
console.log(sum(arr));
console.log(Math.min());
console.log(Math.max());

