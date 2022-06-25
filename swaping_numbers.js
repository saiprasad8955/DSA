// Swaping Numbers



function swap(a, b) {
    // first way
    a = a + b
    b = a - b
    a = a - b;

    // second way
    // [a,b]=[b,a] 

    // third way
    // a = a ^ b
    // b = a ^ b
    // a = a ^ b
    return (a + " " + b)
}

console.log(swap(2, 3));
