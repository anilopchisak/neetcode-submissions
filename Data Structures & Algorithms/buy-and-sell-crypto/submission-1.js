class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0
        let sellDay = 1
        let maxProfit = 0

        while(buyDay < sellDay && sellDay < prices.length) {
            if (prices[sellDay] > prices[buyDay]) {
               maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay])
            }
            else {
                buyDay = sellDay
            }
            sellDay++
        }

        return maxProfit
    }
}
