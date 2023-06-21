/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return nums.length

    const length = nums.length

    // 两个指针
    let i = 0,
        j = 1
    while (j < length) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
            continue
        }
        if (nums[i] === nums[j]) {
            j++
        }
    }

    return i + 1
}
