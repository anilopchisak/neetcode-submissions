class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for (const num of nums) {
            if (!map[num]) map[num] = 0
            map[num] += 1
        }

        const freq = new Array(nums.length)
        for (const [num, count] of Object.entries(map)) {
            if (!freq[count]) freq[count] = []
            freq[count].push(num) 
        }

        const result = []
        for (let i = freq.length - 1; i >= 0; i--) {
            if (freq[i]) {
                for (const num of freq[i]) {
                    result.push(num)
                    if (result.length === k) return result
                }
            }
        }

        return result
    }
}
