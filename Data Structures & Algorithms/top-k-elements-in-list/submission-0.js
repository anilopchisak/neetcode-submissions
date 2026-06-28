class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map()

        for (let i = 0; i < nums.length; i++) {
            countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1)
        }

        const freq = Array.from({ length: nums.length + 1 }, () => [])

        for (const [value, count] of countMap.entries()) {
            freq[count].push(value)
        }

        const result = []
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const item of freq[i]) {
                result.push(item)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
