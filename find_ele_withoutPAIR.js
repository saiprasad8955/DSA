// find ele in array without pair
let arr = [11, 3, 3, 3, 11, 4, 5, 4, 5, 6, 6, 6, 7, 7, 8, 7, 6, 7, 7, 4, 8, 9, 8, 9]


function count(arr) {
    let map = new Map();

    for (let el of arr) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1)
        }
    }


    let count = new Array;
    // check for odd pair 
    for (let i of map) {
        if (i[1] % 2 !== 0) {
            count.push(i[0])
        }
    }

    return count;
}



let result = count(arr);
console.log(result);
