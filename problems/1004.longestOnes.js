// @see: https://leetcode.cn/problems/max-consecutive-ones-iii/

// 滑动窗口
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0,
        zeroCount = 0,
        oneCount = 0,
        oneMax = 0

    nums.forEach((num, idx) => {
        if (num === 1) {
            idx >= left && oneCount++
            if (oneCount > oneMax) oneMax = oneCount
        }
        if (num === 0) {
            if (zeroCount + 1 > k) {
                while (true) {
                    if (nums[left] === 1) oneCount--
                    else {
                        zeroCount--
                        left = left + 1
                        break
                    }
                    left++
                }
            }
            zeroCount++
        }
    })

    return oneMax + zeroCount
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
