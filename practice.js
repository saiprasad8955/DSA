const arr = [2, 4, 6, 1, 3, 5, 7, 9]



const newArr = arr.map((x) => {
    if (x % 2 == 0) {
        return x * 2
    } else {
        return x * 10
    }
});

console.log(newArr)
