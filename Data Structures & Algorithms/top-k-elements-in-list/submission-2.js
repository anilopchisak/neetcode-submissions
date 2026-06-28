class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Массив: число, количество
        // 2. Массив: количество, массив чисел
        // 3. Выберем с конца k элементов

        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        const counts = new Array(nums.length)
        map.forEach((value, key) => {
            if (!counts[value]) {
                counts[value] = []
            }
            counts[value].push(key)
        })

        const result = []
        for (let i = counts.length - 1; i >= 0; i--) {
            if (!counts[i]) continue
            for (let j = 0; j < counts[i].length; j++) {
                if (result.length === k) return result
                result.push(counts[i][j])
            }
        }

        return result
    }
}
