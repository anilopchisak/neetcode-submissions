class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const bucketArr = Array.from({length: nums.length + 1}, () => [])
        let result = []

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        map.forEach((value, key) => bucketArr[value].push(key))

        for (let i = bucketArr.length - 1; i > 0; i--) {
            for (const item of bucketArr[i]) {
                result.push(item)
                if (result.length === k) return result
            }
        }

        return result
    }
}
