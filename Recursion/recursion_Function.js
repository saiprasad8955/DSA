// when a function call itself called as a recursion function 
// otherwise it will get called upto infinite times
// if a function call itself then must be an end 
// ===================================
// let count = 1
// function recursive(num) {

//     if (count > num) {
//         return false;
//     }
//     console.log("Im Printing Values " + " ==> " + count);
//     count++;
//     recursive(num);
// }
// recursive(10)


// ================================return upto n 
// function recur(n){
//     if(n==0) return console.log('Stopped')
//     else{
//         console.log(n);
//         n--;
//         recur(n)
//     }
// }

// console.log(recur(54))


// =========================== sum of numbers upto n
// function sum(n) {
//     if (n == 1){ return 1 ;}
//     else { return n + sum(n - 1);}
// }

// console.log(sum(2))

// =============================Sum of even numbers
function sumEven(n){

    // base condition 
    if(n <= 0){
        return "NO SUM"
    }else if(n == 1){
        return 0
    }

    // recursive call
    return 2*n-2 + sumEven(n-1);
}

console.log(sumEven(10))