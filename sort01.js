// sort zeros and one
function sort01(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (arr[left] == 0 && left < right) {
            left++;
        }
        while (arr[right] == 1 && left > right) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }

}

let arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0]
sort01(arr)
console.log(arr);
// console.log('hiii');

