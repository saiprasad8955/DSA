const arr = [12, 1, 22, 3, 2, 13, 4, 33, 31, 2, 12, 12, 123, 45, 5455, 5, 5, 4, 5, 4, 5, 3]

// we need maximum and minimum
function maxSumOfTwoElement(arr) {
    let map = new Map();
    for (let i of arr) {
        if (map.get(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    }
    // console.log(map);

    let max = Math.max();
    let el = ''
    for (let i of map) {
        if (i[1] > max) {
            max = i[1];
            el = i[0]
        }
    }
    return "maximum frequency of number is ==> "+el + ' And occurs: ' + max
}

console.log(maxSumOfTwoElement(arr));

