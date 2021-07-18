/**
 * 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length
    if (len <= 2) return []

    const candidates = new Set()
    const sorted = nums.sort((a, b) => a - b)
    if (sorted[0] > 0 || sorted[len - 1] < 0) return []

    for (let i = 1; i < len - 1; i++) {
        let l = 0,
            r = len - 1
        let val = sorted[i]
        if (i + 1 < len - 1 && val === sorted[i + 1]) continue

        while (l < i && r > i) {
            let v1 = sorted[l],
                v2 = val,
                v3 = sorted[r]
            let sum = v1 + v2 + v3
            if (sum === 0) {
                candidates.add([v1, v2, v3].join('#'))
                l++
                r--
            }
            if (sum > 0) {
                r--
            }
            if (sum < 0) {
                l++
            }
        }
    }

    const result = []
    candidates.forEach(val => {
        result.push(val.split('#').map(v => +v))
    })
    return result
}

export default threeSum
