let highLow = 'DOHTAR HTANKE DASARPIAS';
// console.log(str)

// using Recursion
function reverse(str){
    if(str.length <= 1){ // base case
        return str
    }
    return reverse(str.slice(1)) + str[0]
}


console.log(reverse(highLow))