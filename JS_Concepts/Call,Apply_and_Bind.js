// Call Apply And Bind Method in JS
https://youtu.be/Zb4dPi7CANU // JS REVISION
// ===========================>>> CALL METHOD
// Function Borrowing 
const userM = {
    firstName: "Sai",
    lastName: "Rathod",
    age: 28,
    printDetails: function () {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.age)
    }
}

const user2 = {
    firstName: "Saiprasad",
    lastName: "Rathod",
    age: 29
}
userM.printDetails.call(user2)


// ===========================>>> Apply Method
const persons = {
    firstName: 'Sai',
    lastName: 'Rathod'
}

function greet(greetings, message) {
    return `${greetings} ${this.firstName} ${this.lastName}. ${message}`
    // return this.firstName+' '+this.lastName + greetings + message 
}

const result = greet.apply(persons, ['Hello boiii', 'Im here by Apply'])
console.log(result);



// ===========================>>> Bind Method

let runner = {
    name: 'Runner',
    run: function (speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};


let flyer = {
    name: 'Flyer',
    fly: function (speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};


let run = flyer.fly.bind(runner, 20);
run();


