// // ( )  => { }
// // function fun(   ){

// // function sum(a,b){
// //     return a+b
// // }
// // // console.log(sum(7,5));
// // return sum()
// // }
// // console.log();




// console.log("Employee=> ", employee);
// var newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
 
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// // Name of the employee as well as
// // newEmployee is changed.



// var employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// var newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ",            employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ",            employee);
// console.log("New Employee=> ", newEmployee);


// var employee = [{ eid: "E102"},
//                 {ename: "Jack"},
//                 {eaddress: "New York"},
//                 {salary: 50000}
//                ]



// employee.forEach((obj,index,arr)=>{ 
//     console.log(obj);
//     console.log(index);
//     console.log(arr);
// })