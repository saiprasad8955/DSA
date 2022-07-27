var firstMissingPositive = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let min = 1;
    for (let el of nums) {
        if (el == min) min++
        if (el > min) return min
    }
    return min;
};


const result = firstMissingPositive([3, 4, 1, -1]);
console.log(result);




// Closures
function outer() {
    let count = 0;
    return function inner() {
        console.log(`${count++} is a counter`)
    }
}
var result1 = outer();
result1()



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
const user = {
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

user.printDetails.call(user2)
