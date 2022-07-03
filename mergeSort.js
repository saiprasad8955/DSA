// merge sorted array 
function mergeSort(arr) {
    function merge(arr1, arr2) {
        let combined = new Array();
        let i = 0; j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                combined.push(arr1[i]);
                i++;
            } else {
                combined.push(arr2[j]);
                j++
            }
        }

        return [...combined, ...arr1.slice(i), ...arr2.slice(j)]
    }

    if (arr.length <= 1) return arr;
    let midE = Math.floor(arr.length / 2);
    console.log(midE);

    let left = arr.slice(0, midE);
    console.log(left);

    let right = arr.slice(midE);
    console.log(right);



    return merge(mergeSort(left), mergeSort(right))
}

let arr = [2, 8, 1, 3, 6, 7, 5, 4]
let result = mergeSort(arr);
console.log(result);
