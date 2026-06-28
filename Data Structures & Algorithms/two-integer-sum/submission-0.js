class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]
            if (map.has(target - current)) {
                return [map.get(target - current), i]
            }
            map.set(nums[i], i)
        }
        return []
    }
}
