function add(num) {
    return new Promise((resolve, reject) => {
        return resolve(num)
    })
}



add(13).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})



