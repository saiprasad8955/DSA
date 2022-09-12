const arr = [12, 45, 3, 2, 7, 34, 89, 23, 12, 11, 14]

const value = 2;

let Interval = setInterval(() => {

    res().then((res) => {
        if (res === 'Helloo') {
            console.log(res)
            clearInterval(Interval)
        }
    }).catch((rej) => console.log(rej))
}, 2000);

const res = function () {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 3);
        if (value == num) return resolve('Helloo');
        return reject('No Number Found')
    })
}



const values = 2;
// console.log(Math.floor(Math.random()*3));

const promise = new Promise((res, rej) => {
    const random = Math.floor(Math.random() * 3);
    if (random === values) {
        res('You Guessed it Correctly')
    } else {
        rej('wrong number')
    }
    // rej('hii')
})

// console.log(promise)

promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err))





