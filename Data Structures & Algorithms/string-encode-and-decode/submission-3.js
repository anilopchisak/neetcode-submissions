class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => s.length + '#' + s).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0
        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            const length = parseInt(str.slice(i, j))
            i = j + 1
            j = i + length
            result.push(str.slice(i, j))
            i = j
        }
        return result
    }
}
