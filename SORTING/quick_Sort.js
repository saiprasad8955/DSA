// QUICK SORT
let arr = [5, 3, 7, 6, 2, 9]

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIndex = partition(arr, left, right);

        // sort ele before pivot
        quicksort(arr, left, pivotIndex - 1);

        // sort ele after pivot
        quicksort(arr, pivotIndex + 1, right)
    }

    return arr
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)]
    i = left;
    j = right;

    while (i <= j) {
        //increment left pointer
        while (arr[i] < pivot) {
            i++;
        }

        // decrement right pointer
        while (arr[j] > pivot) {
            j--;
        }

        // swaping
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;
        }
    }
    return i;//left pointer
}


console.log(quicksort(arr));


