//=========================>>>>>>>>> First
// function sai() {
//     console.log(1);
//     setTimeout(() => console.log(2), 1000);
//     setTimeout(() => console.log(3), 0);
//     console.log(4)
// }
// console.log(sai());


//=========================>>>>>>>>> Second
// var a = 'a';
// {
//     var a = 'b';
//     console.log(a);
// }
// console.log(a);


//=========================>>>>>>>>> Third
// (function () {
//     var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));


//=========================>>>>>>>>> FOURTH
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func: this.foo = " + this.foo);
//         console.log("outer func: self.foo = " + self.foo);
//         (
//             function () {
//                 console.log("inner func: this.foo = " + this.foo);
//                 console.log("inner func: self.foo = " + self.foo);
//             }()
//         );
//     }
// };
// myObject.func();

//=========================>>>>>>>>> FIFTH
//Q. Write a program to find the 3rd smallest number in an array of integers.

console.log(1 + "2" + "2");

//=========================>>>>>>>>> FIFTH
for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}
//=========================>>>>>>>>> FIFTH
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}
//=========================>>>>>>>>> FIFTH
console.log(typeof 1);
//=========================>>>>>>>>> FIFTH
if (console.log("Hi")) {
    console.log("True");
} else {
    console.log("False");
}





//=========================>>>>>>>>> FIFTH
const candidates = [
    {
        name: 'user1',
        skills: ['reactjs', 'redux', 'nodejs', 'mongodb']
    },
    {
        name: 'user2',
        skills: ['reactjs', 'redux', 'nodejs']
    },
    {
        name: 'user3',
        skills: ['java', 'redis', 'kafka']
    }
]
const required_skills = ['reactjs', 'redux'];
const arr = new Array();
var b = candidates.filter(x => {
    if (x.skills.includes('reactjs') || x.skills.includes('redux')) {
        return x
    }
}
)
console.log(b);







// const multipleExist = values.every(value => {
//     return arr.includes(value);
//   });
