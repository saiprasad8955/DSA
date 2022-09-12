let data = ["name", "sai","City","jaipur", "Address","sainagar","Travelling"]
let data1 = [12,56,4,3,5,2,1,13,14,35]


//------------------------------------------------------------------------- For EACH 
data.forEach((element,ind,arr) => {
    // console.log(element);
    // console.log(ind);
    // console.log(arr);
    // console.log(ind + ":"+ element);
});




///----------------------------------------------------------------------- FOR IN LOOP
//for array
let txt1 =""
for(let x in data1){
    // console.log(txt1 = txt1 + data1[x])
    // console.log(txt1+":"+"hii there")
}
console.log(txt1)


const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
txt += numbers [ x ];
}

console.log(txt);

// for objects
let dataOB = {name : "sai",City:"jaipur", Address:"sainagar",hobbies:"Travelling"}

for(let key in dataOB){
    console.log(key);
    console.log(dataOB[key]);
    // console.log(dataOB[key]+":"+dataOB[key]+":"+dataOB[key]);

}
var triangle = {a: 1, b: 2, c: 3};
let arr = []

for(key in triangle){
    console.log(arr.push(triangle[key]));
    console.log(arr)
}
console.log(arr)




// Used for checking keys in object
console.log(Object.getOwnPropertyNames(dataOB))
console.log(Object.keys(dataOB));



// filter 
const sai = ["saisdfghjkl"];
// console.log(sai.push("hey hello"));
// console.log(sai)
console.log(sai.every(ele=>typeof ele === "string"));

// by filter
console.log(sai.some(ele=>typeof ele === "string"));



//----------------------------------------------------------------------FOR OF LOOP

// let dataOwe = {name : "sai",City:"jaipur", Address:"sainagar",hobbies:"Travelling"};
// for (let ele of dataOwe){
// console.log(ele);
// }





//////////////////-------------------------------------
const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];


for (let ele in facebookProfiles){
    console.log(facebookProfiles[ele]);
}


let dat = facebookProfiles.filter(el => el.address.location === "gurgaon")
console.log(dat);

let name = dat.map(x=> x.firstName+" "+(x.lastName?x.lastName:""));
console.log(name);



let hii = Object.values(facebookProfiles);
console.log(hii);
///////////////////////////////////////////////////////////////////////////

let sa = facebookProfiles.map((x)=>{x.firstName});
console.log(sa);

