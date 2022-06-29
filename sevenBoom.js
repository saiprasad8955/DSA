let arr = [1, 3, 4, 67, 87, 34, 7];

function seven(arr) {
    arr = arr.join('')
    let result;
    // console.log(arr);
    for (let el of arr) {
        // console.log(arr[i]);
        if (el == 7) {
            console.log('SEVEN BOOM')
            result = 'BOOM!'
            
        }

    }
    return result

}

console.log(seven(arr));
