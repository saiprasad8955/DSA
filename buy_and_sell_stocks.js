// Dynamic programming solution.
// O(n) time complexity
// O(n) space
// [7, 1, 5, 3, 6, 4]



function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]; // array of selling prices

    for (let i = 0; i < prices.length; i++) {
        let sellPrice = prices[i];
        let profit = sellPrice - minPrice;
        maxProfit = Math.max(maxProfit, profit)
        if (sellPrice < minPrice) { minPrice = sellPrice }
    }
    return maxProfit
};


const price = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(price)