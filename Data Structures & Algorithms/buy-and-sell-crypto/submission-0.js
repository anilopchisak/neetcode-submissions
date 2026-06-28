class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0
        let sellDay = 1
        let maxProfit = 0
        while (buyDay < sellDay && sellDay < prices.length) {
            if (prices[buyDay] > prices[sellDay]) {
                buyDay = sellDay
            }
            else {
            const newProfit = prices[sellDay] - prices[buyDay]
            maxProfit = newProfit > maxProfit ? newProfit : maxProfit
            } 
            sellDay++
        }
        return maxProfit
    }
}
