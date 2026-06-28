class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = [...nums].sort((a, b) => a - b)
        const result = []

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] > 0) break
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue

            const rest = 0 - sortedNums[i]
            let j = i + 1
            let k = sortedNums.length - 1

            while (j < k) {
                const curSum = sortedNums[j] + sortedNums[k]
                if (curSum === rest) {
                    result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                    j++
                    k--
                    while (j < k && sortedNums[j] === sortedNums[j - 1]) {
                        j++
                    }
                }
                else if(curSum < rest) {
                    j++
                }
                else {
                    k--
                }
            }
        }

        return result
    }
}
