
let str = 'abcdefg'
let k = 2
function reverseStr(s, k) {
    let str = s.substr(0, k)
    let str2 = s.substr(k).split('')
    str = str.split('').reverse()
    return [...str,...str2].join('')
};

const result = reverseStr('abcdefg', 2);
console.log(result);