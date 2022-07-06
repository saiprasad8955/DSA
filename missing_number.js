// missing number in array


// for 1 to n only for sorted array
function missingN(arr) {
    let maxNumber = Math.max(...arr);
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }
    return (maxNumber * (maxNumber + 1) / 2) - totalSum;
}

console.log(missingN([1, 4, 5, 6, 8, 9]));


// for 1 to n ele for unsorted array

function missingN1(arr) {
    let maxNumber = Math.max(...arr);

    const hash = new Array(maxNumber + 1).fill(false);

    for (let el of arr) {
        hash[el] = true;
        // console.log(hash[el]);

    }
    let res = new Array();
    // console.log(hash);

    for (let i = 1; i < maxNumber; i++) {
        if (!hash[i]) {
            res.push(i)
        }
    }
    return res;
}

console.log(missingN1([1, 6, 8, 9]));


console.log([5,4,2,1,6, 9].sort());


// get subsequence of a string
// 2) KPC PROBLEM
// 1. You are given a string str. The string str will contains numbers only, where each number stands for a key pressed on a mobile phone.
// 2. The following list is the key to characters map :
//     0 -> .;
//     1 -> abc
//     2 -> def
//     3 -> ghi
//     4 -> jkl
//     5 -> mno
//     6 -> pqrs
//     7 -> tu
//     8 -> vwx
//     9 -> yz
// 3. Complete the body of getKPC function - without changing signature - to get the list of all words that could be produced by the keys in str.
// Use sample input and output to take idea about output.
// 3) GET MAZE PATHS
// 1. You are given a number n and a number m representing number of rows and columns in a maze.
// 2. You are standing in the top-left corner and have to reach the bottom-right corner. Only two moves are allowed 'h' (1-step horizontal) and 'v' (1-step vertical).
// 3. Complete the body of getMazePath function - without changing signature - to get the list of all paths that can be used to move from top-left to bottom-right.
// 4)get maze paths with jumps
