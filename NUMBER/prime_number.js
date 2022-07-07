// function isPrime(num) {
//     for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

function isPrime(num) {
    if(num < 2){
        return `${num} is not a Prime Number`
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));