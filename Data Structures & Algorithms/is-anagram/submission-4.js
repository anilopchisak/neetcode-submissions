class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
        const mapS = new Map()
        const mapT = new Map()

        for (const letter of s) {
            mapS.set(letter, (mapS.get(letter) || 0) + 1)
        }

        for (const letter of t) {
            mapT.set(letter, (mapT.get(letter) || 0) + 1)
        }

        for (const [letter, count] of [...mapS.entries()]) {
            if (!mapT.has(letter) || mapT.get(letter) !== count) return false
        }

        return true
    }
}
