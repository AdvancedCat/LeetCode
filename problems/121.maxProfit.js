/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxEarn = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if (prices[i] - minPrice > maxEarn) {
            maxEarn = prices[i] - minPrice
        }
    }

    return maxEarn
}
