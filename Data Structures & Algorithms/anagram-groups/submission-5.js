class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dict = {}

        for (const str of strs) {
            const freq = new Array(26).fill(0)

            for (const char of str) {
                const ind = char.charCodeAt(0) - 'a'.charCodeAt(0)
                freq[ind] = freq[ind] + 1
            }

            const key = freq.join(',')
            if (!dict[key]) dict[key] = []
            dict[key].push(str)
        }

        return Object.values(dict)
    }
}
