// Find Richest Person of accounts
const arr = [[1, 3, 4], [2, 5, 6]];


function richPerson(accounts) {
    let max = 0;
    for (let customer of accounts) {
        // console.log(customer);
        let customerTotal = 0;
        for (let money of customer) {
            // console.log(money);
            customerTotal += money
        }
        max = Math.max(max, customerTotal)
    }
    return max
}

console.log(richPerson(arr));