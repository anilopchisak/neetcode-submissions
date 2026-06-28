class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map()
        let i = 0
        let j = 0
        let maxLen = 0

        while (j < s.length) {
            if (map.has(s[j]) && map.get(s[j]) >= i) {
                i = map.get(s[j]) + 1
            }
            map.set(s[j], j)
            maxLen = Math.max(maxLen, j - i + 1)
            j++
        }

        return maxLen
    }
}
