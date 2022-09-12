const sai = [1,3,34,4,2,23,3,23];
console.log(sai);

const facebookProfiles = [
    {
        firstName: "Omkar",
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



for(let ind in facebookProfiles){
    console.log(facebookProfiles[ind]);
};





const prso ={name:"giii",city:"gurgaon",adrres:"sai heights"};

const hello = {...prso,number:24634236846,name:"hello sai"};
console.log(hello);