class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for (const cur of strs) {
            const sorted = cur.split('').sort().join('')
            if (map.has(sorted)) {
                map.get(sorted).push(cur)
            }
            else {
                map.set(sorted, [cur])
            }
        }
        return [...map.values()]
    }
}
