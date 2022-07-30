// least character and frequency

// let str = "stringggstri"

// function map(str) {
//     let map = new Map();
//     for (let el of str) {
//         if (map.get(el)) {
//             map.set(el, map.get(el) + 1)
//         } else {
//             map.set(el, 1)
//         }
//     }

//     let minFreq = Math.min();
//     let leastChar = '';

//     for (let i of map) {
//         if (minFreq > i[1]) {
//             minFreq = i[1];
//             leastChar = i[0]
//         }

//     }
//     return (leastChar + " " + minFreq)
// }

// console.log(map(str));



// 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb';
// let str1 = 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb'

function minOcuurChar(str) {
    // first we will store all ele in hash map
    let map = new Map();
    for (let el of str) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1)
        }
    }
    console.log(map);
    let minOccur = Math.min()
    let leastChar = ''

    for (let i of map) {
        if (minOccur > i[1]) {
            minOccur = i[1];
            leastChar = i[0];
        }
    }
    return leastChar + ' ' + minOccur
}

// console.log(minOcuurChar(str1));


let str1 = 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb'
function reverseStr(str){
    str = str.split('');
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        [str[left],str[right]] = [str[right], str[left]]
        left++;
        right--;
    }
    return str.join('')
}

console.log(reverseStr(str1));

let str3 = 'i am doing the work'

function sentence(str){
    str = str.split(' ')
    let newStr = ''
    for (let i = 0; i< str.length ; i++){
      newStr = newStr +' '+reverseStr(str[i])
    }
    return newStr
}
console.log(sentence(str3));
