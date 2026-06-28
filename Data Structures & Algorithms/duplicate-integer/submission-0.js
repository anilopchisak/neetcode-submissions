class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countNums = new Map()
        for (const num of nums) {
            if (countNums.has(num)) return true
            countNums.set(num, 1)
        }
        return false
    }
}
