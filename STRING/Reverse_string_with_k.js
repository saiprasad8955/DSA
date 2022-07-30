
let str = 'abcdefg'
let k = 2
function reverseStr(s, k) {
    let str = s.substr(0, k)
    console.log(str);
    let str2 = s.substr(k).split('')
    console.log(str2);
    
    str = str.split('').reverse()
    console.log(str);
    
    let result = [...str,...str2].join('');
    return result
};

const result = reverseStr('abcdefg', 2);
console.log(result);



// SET-TIMEOUT
// function set() {
//     setTimeout(() => console.log('hhi there im from back side'), 5000);
//     console.log('hiii');
// }

// SET-INTERVAL
// let count = 0;
// let interval = setInterval(() => {
//     count++;
//     if (count == 5) {
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime = new Date().toLocaleTimeString();
//     console.log(dateTime);
// }, 2000)


/*
// SET TIMEOUT WITH CALLBACK
var print_two = function (call_back) {
    setTimeout(() => {
        console.log('2');
        call_back();
    }, 2000);
};
// code
console.log('1');
print_two(function () { console.log('3'); });
*/



const animals = ['sheli','manjar','khekda', 'masa']

let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let swap = false;
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (swap == false) break;
    }
    return arr
};

console.log(bubbleSort(animals));
