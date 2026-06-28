class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length - 1
        let max = 0
        while (j > i) {
            const cur = (j - i) * Math.min(heights[i], heights[j])
            if (cur > max) {
                max = cur
            }
            if (heights[i] < heights[j]) i++
            else j--
        }
        return max
    }
}
