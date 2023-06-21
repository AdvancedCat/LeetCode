/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const length = nums.length

    let totalSum = nums.reduce((sum, cur) => sum + cur, 0)

    let cur = 0,
        leftSum = 0

    while (cur < length) {
        if (totalSum - leftSum - nums[cur] === leftSum) {
            break
        } else {
            leftSum += nums[cur]
            cur++
        }
    }

    if (cur === length) {
        return -1
    }

    return cur
}
