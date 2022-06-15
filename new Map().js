const map = new Map();
const set = new Set;
const count = new Object
const arr = new Array;
console.log(count)
console.log(arr)
console.log(count)
console.log(set)// unique values
console.log(map);


const str = [1, 4, 4, 4, 4, 4, 4, 4, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 46]
// const arra = [...new Set(str)];
// str.join('')
// console.log(arra);
const maps = {}
for (let ele of str) {

    if (map[ele]) map[ele] += 1;
    else map[ele] = 1;
}

console.log(map);