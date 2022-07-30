
// ---- promise in JS
/*
function add(num) {
    return new Promise((resolve, reject) => {
        return resolve(num + 20)
    })
}


add(13).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
*/

// Callback in js

function add(num, call) {
    call(null, num + 20)
}

add(14, (rej, res) => {
    console.log(res + ' ' + rej);
})





const arr = [8, 2, 3, 4, 5, 6, 7, 8]


const num = '123';
console.log(typeof +num);



console.log(['bat','animal','animesh','hey boy'].sort());



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