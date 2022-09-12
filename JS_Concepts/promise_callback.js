
// ---- Promise in JS
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

// function add(num, call) {
//     call(null, num + 20)
// }

// add(14, (rej, res) => {
//     console.log(res + ' ' + rej);
// })

/*
function getMoneyBack(money, callback) {
    callback(null, money+200)
}

getMoneyBack(1200,(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
    
})*/

// Sort it 
// ['bat','animal','animesh','hey boy']






async function time() {
    let promis = new Promise((res, rej) => {
        if (res) {
            setTimeout(() => {
                console.log("5 second")
            }, 5000);
        } else {
            console.log(rej)
        }
    })

    function work() {
        let promis = new Promise((res, rej) => {
            if (res) {
                setTimeout(() => {
                    console.log("1 second")
                }, 1000);
            } else {
                console.log(rej)
            }
        })

        return promis
    }

    console.log(work())

    return promis
}

console.log(time())
// 4166 4451 0023 2213



