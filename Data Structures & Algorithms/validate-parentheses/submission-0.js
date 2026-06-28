class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const brackets = new Map([
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ])
        for (const char of s) {
            if (brackets.has(char)) stack.push(char)
            else if (char === brackets.get(stack.at(-1))) stack.pop()
            else return false 
        }
        return stack.length === 0
    }
}
