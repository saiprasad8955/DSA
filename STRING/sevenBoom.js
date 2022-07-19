let arr = [1, 3, 4, 67, 87, 34, 7];

function seven(arr) {
    arr = arr.join('')
    for (let el of arr) {
        if (el == 7) {
            console.log('SEVEN BOOM')
        }
    }
    return;
}

console.log(seven(arr));

