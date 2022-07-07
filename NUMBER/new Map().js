const map = new Map();
const set = new Set;
const count = new Object;
const arr = new Array;
console.log(count)
console.log(arr)
console.log(count)
console.log(set)// unique values
console.log(map);


const str = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56]
// const arra = [...new Set(str)];
// console.log(arra);

// str.join('')
// console.log(arra);
const unique = new Set;
console.log(unique);

const maps = new Map();
for (let ele of str) {
    if (map.has(ele)) {
        map.set(ele, map.get(ele) + 1)
    } else {
        map.set(ele, 1)
    }
    // if (map[ele]) map[ele] += 1;
    // else map[ele] = 1;
}

console.log(map);
const result = [];

for (let i of map) {
    if (i[1] === 1) {
        result.push(i[0])

    }
}
console.log(result.length);

// const map2 = new Map();
// const arra = [...map.entries()].sort((a, b) => b[1] - a[1])
// console.log(arra);




