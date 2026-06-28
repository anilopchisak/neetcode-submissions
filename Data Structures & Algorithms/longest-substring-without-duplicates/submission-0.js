class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map()
        let max = 0
        let i = 0
        let j = i

        while (j < s.length) {
            if (map.has(s[j]) && map.get(s[j]) >= i) {
                i = map.get(s[j]) + 1
            }
            max = Math.max(max, j - i + 1)
            map.set(s[j], j)
            j++
        }
        return max
    }
}
