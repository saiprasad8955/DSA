// SET-TIMEOUT
function set() {
    var fun = () => console.log('hhi there im from back side')
    setTimeout(fun, 5000);
    console.log('hiii');
}
set()

// SET-INTERVAL
let count = 0;
let interval = setInterval(() => {
    count++;
    if (count == 5) {
        clearInterval(interval);
    }

    // display the current time
    let dateTime = new Date().toLocaleTimeString();
    console.log(dateTime);
}, 2000)



// SET TIMEOUT WITH CALLBACK
// var print_two = function (call_back) {
//     setTimeout(() => {
//         console.log('2');
//         call_back();
//     }, 2000);
// };
// // code
// console.log('1');
// print_two(function () { console.log('3'); });
