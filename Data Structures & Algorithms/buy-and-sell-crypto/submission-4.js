class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let buy = 0
        let sell = buy + 1
        while (sell < prices.length) {
            if (prices[buy] < prices[sell]) {
                profit = Math.max(profit, prices[sell] - prices[buy])
            }
            else {
                buy = sell
            }
            sell++
        }

        return profit
    }
}
