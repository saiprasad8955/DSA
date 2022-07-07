const arr = [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]


var maximumImportance = function (n, arr) {
    let map = new Map();
    for (let el of arr) {
        console.log(el);

        if (map.has(el[0])) {
            map.set(el[0], map.get(el[0]) + 1)
        } else {
            map.set(el[0], 1)
        }

        if (map.has(el[1])) {
            map.set(el[1], map.get(el[1]) + 1)
        } else {
            map.set(el[1], 1)
        }
    }
    let map2 = [...map.entries()].sort((a, b) => b[1] - a[1])
    console.log(map2);

    // Assigning Values
    let sum = 0;
    for (let i = 0; i < map2.length; i++) {
        sum += (map2[i][1] * n);
        n--;
    }
    return sum;

};

console.log(maximumImportance(5, arr));




// for of for arrr  ===>> for direct value
// for in for object ====>> key values