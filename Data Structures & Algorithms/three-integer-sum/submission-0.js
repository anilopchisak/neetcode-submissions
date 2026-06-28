class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = [...nums.sort((a, b) => a - b)]
    const target = 0
    let i = 0

    const result = []
    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue
        let j = i + 1
        let k = sortedNums.length - 1
        const restTarget = target - sortedNums[i]
        while (j < k) {
            const curSum = sortedNums[j] + sortedNums[k]
            if (curSum === restTarget) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                j++
                k--
                while(sortedNums[j] === sortedNums[j-1] && j < k) {
                    j++
                }
            }
            else if (curSum > restTarget) {
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
