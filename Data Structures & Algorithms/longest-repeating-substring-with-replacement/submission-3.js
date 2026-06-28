class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqs = new Map()
        let l = 0
        let maxf = 0
        let maxLen = 0

        for (let r = 0; r < s.length; r++) {
            freqs.set(s[r], (freqs.get(s[r]) || 0) + 1)
            maxf = Math.max(maxf, freqs.get(s[r]))

            while (r - l + 1 - maxf > k) {
                freqs.set(s[l], freqs.get(s[l]) - 1)
                l++
            }

            maxLen = Math.max(maxLen, r - l + 1)
        }

        return maxLen

        // 0 1 2 3 4 5 6
        // A A B A B B A
        //     i
        //           j

        // map = {
        //     A: 2
        //     B: 2
        // } 
        // maxf = 2
        // maxLen = 3
    }
}
