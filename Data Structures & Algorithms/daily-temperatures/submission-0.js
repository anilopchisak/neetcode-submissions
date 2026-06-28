class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = new Array(temperatures.length)
        result.fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            let flag = true
            while (stack.length > 0 && flag) {
                const [popedValue, popedIndex] = stack.at(-1)
                if (temperatures[i] > popedValue) {
                    result[popedIndex] = i - popedIndex
                stack.pop()
                }
                else flag = false
            }
            stack.push([temperatures[i], i])
        }
        return result
    }
}
