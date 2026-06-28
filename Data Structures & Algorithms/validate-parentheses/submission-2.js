class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ])

        const stack = []

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) stack.push(s[i])
            else if (map.get(stack.pop()) === s[i]) continue
            else return false
        }

        return stack.length === 0
    }
}
