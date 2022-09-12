// CALLBACK HELL

const main = (callback) => {
    setTimeout(() => {
        // console.log('Hii');
        callback([2, 3, 4])
    }, 2000);
}


function add(arr) {
    let sum = 0;
    for (let el of arr) {
        sum += el
    }
    console.log(sum);

}

console.log(main(add));

// Main function
// const mainFunction = (callback) => {
// 	setTimeout(() => {
// 		callback([2, 3, 4]);
// 	}, 2000)
// }

// // Add function
// const add = (array) => {
// 	let sum = 0;
// 	for(let i of array) {
// 		sum += i;
// 	}
// 	console.log(sum);
// }

// // Calling main function
// mainFunction(add);
