// when a function call itself called as a recursion function 
// otherwise it will get called upto infinite times
// if a function call itself then must be an end 

let count = 1
function recursive(num) {

    if (count > num) {
        return false;
    }
    console.log("Im Printing Values " + " ==> " + count);
    count++;
    recursive(num);
}
recursive(10)