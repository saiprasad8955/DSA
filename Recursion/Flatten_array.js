// program to use array : [1,2,[3,4,5],[6,7]]
// let arr = [1,2,3,4,5,6,7]

const flattenArray = (arr) => {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) == false) {
            myArr.push(arr[i])
        } else {
            myArr = myArr.concat(flattenArray(arr[i]))
        }
    }
    return myArr;
}


console.log(flattenArray([1, 2, [3, 4, 5], [6, 7]]))