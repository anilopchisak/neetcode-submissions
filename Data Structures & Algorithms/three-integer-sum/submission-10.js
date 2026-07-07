class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) return []
        const result = []
        const sorted = [...nums.sort((a, b) => a - b)]
        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue
            }
            let j = i + 1
            let k = sorted.length - 1
            while (j < k) {
                const res = sorted[i] + sorted[j] + sorted[k]
                if (res === 0) {
                    result.push([sorted[i], sorted[j], sorted[k]])
                    k--
                    j++
                    while (j < k && sorted[k] === sorted[k + 1]) {
                        k--
                    }
                    while (j < k && sorted[j] === sorted[j - 1]) {
                        j++
                    }
                }
                else if (res > 0) {
                    k--
                }
                else {
                    j++
                }
            }
        }

        return result
    }
}
