


// CHECK FREQUENCY OF CHARCTER

// console.log(Math.floor(Math.log(5)/Math.log(2)) + 1 )
let arr = [1, 1, 1, 2, 2, 2, 3, 4, 4, 5,];

let freqObj = {};
let maxOcc = 0;
let maxChar = 0;
for (let i = 0; i < arr.length; i++) {
    if (freqObj.hasOwnProperty(arr[i])) {
        freqObj[arr[i]] += 1;
    } else {
        freqObj[arr[i]] = 1
    }

    if (maxOcc < freqObj[arr[i]]) {
        maxOcc = freqObj[arr[i]];
        maxChar = arr[i]
    }

}

console.log(freqObj)
console.log(maxChar)
console.log(maxOcc)








