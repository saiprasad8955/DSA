// Closures
// used for data privacy, memoize
function outer() {
    let count = 0;
    return function inner() {
        console.log(`${count++} is a counter`)
    }
}
var result1 = outer();




// This is function currying in js
function outer(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const res = outer(1)(2)(3)
console.log(res);

// Call Apply And Bind Method in JS

//=== CALL METHOD ===
// function borrowing 
const userM = {
    firstName: "Sai",
    lastName: "Rathod",
    age: 28,
    printDetails: function () {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.age)
    }
}

// user.printDetails();

const user2 = {
    firstName: "Saiprasad",
    lastName: "Rathod",
    age: 29
}

userM.printDetails.call(user2)




// normal function
function add(a,b,c){
    return a+b+c
}

console.log(add(1,2,3));


function add(a){
    a
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}


const result = add(23)
console.log(result);

const result2 = result(34);
const result3 = result2(23);
console.log(result3);


const resulter = add(12)(23)(45);
console.log(resulter);
