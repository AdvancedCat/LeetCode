/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length
    if (length <= 1) return

    let i = 0,
        j = 0

    while (j < length) {
        if (nums[i] !== 0) {
            i++
            j < i ? (j = i) : void 0
            continue
        }
        if (nums[i] === 0) {
            while (j < length) {
                if (nums[j] !== 0) break
                j++
            }
            if (j < length) {
                nums[i] = nums[j]
                nums[j] = 0
                j = i
            }
        }
    }
}
