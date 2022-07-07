let arr = [1, 3, 4, 67, 87, 34, 7];

function seven(arr) {
    arr = arr.join('')
    let result;
    for (let el of arr) {
        if (el == 7) {
            console.log('SEVEN BOOM')
            result = 'SEVEN BOOM!!!!!!!'
        }
    }
    return result
}

console.log(seven(arr));

