class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map()
        let result = 0
        let left = 0
        let maxf = 0

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1)
            maxf = Math.max(maxf, map.get(s[right]))

            while (right - left + 1 - maxf > k) {
                map.set(s[left], map.get(s[left]) - 1)
                left++
            }

            result = Math.max(result, right - left + 1)
        }

        return result
    }
}
