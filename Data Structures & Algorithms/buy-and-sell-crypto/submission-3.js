class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0
        let j = 1
        let maxProfit = 0

        while (j < prices.length) {
            if (prices[i] > prices[j]) {
                i = j
            }
            else {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            }
            j++
        }

        return maxProfit
    }
}
