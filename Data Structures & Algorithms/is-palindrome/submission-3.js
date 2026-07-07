class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValid(c) {
            return /^[a-zA-Z0-9]$/.test(c)
        }

        let left = 0
        let right = s.length - 1
        while (left <= right) {
            if (!isValid(s[left])) {
                left++
                continue
            }
            else if (!isValid(s[right])) {
                right--
                continue
            }
            else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }

        return true
    }
}
