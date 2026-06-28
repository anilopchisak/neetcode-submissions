class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValidSymbol(sym) {
            return /[a-zA-Z]/.test(sym) || /\d/.test(sym)
        }

        let l = 0
        let r = s.length - 1
        while(l < r) {
            while (!isValidSymbol(s[l]) && l < r) l++
            while (!isValidSymbol(s[r]) && l < r) r--
            if (isValidSymbol(s[l]) && isValidSymbol(s[r]) && s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++
            r--
        }   
        return true
    }
}
