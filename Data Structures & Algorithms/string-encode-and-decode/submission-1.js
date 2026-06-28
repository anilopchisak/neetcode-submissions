class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs) {
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let currentCount = ''
        let i = 0
        while (i <= str.length) {
            if (str[i] === '#') {
                const decodedStr = str.slice(i + 1, i + 1 + +currentCount)
                result.push(decodedStr)
                 i = i + 1 + +currentCount
                currentCount = ''
            }
            else {
                currentCount += str[i]
                i++
            }
        }
        
        return result
    }
}
