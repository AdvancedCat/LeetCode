/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const length = nums.length

    let l = 0,
        r = length - 1
    while (l < r && nums[l] > nums[r]) {
        if (nums[l] === target) return l
        if (nums[r] === target) return r
        l++
        r--
    }

    if (l === r) {
        return nums[l] === target ? l : -1
    } else {
        return binarySearch(nums, target, l, r)
    }
}

/**
 *
 * @param {*} list 一个升序的数组
 * @param {*} left
 * @param {*} right
 */
function binarySearch(list, target, left, right) {
    if (!list.length) return -1

    if (left === void 0) left = 0
    if (right === void 0) right = list.length - 1

    if (left > right) return -1
    if (left === right) return list[left] === target ? left : -1

    const mid = Math.floor((left + right) / 2)
    if (list[mid] === target) return mid
    if (list[mid] > target) return binarySearch(list, target, left, mid - 1)
    if (list[mid] < target) return binarySearch(list, target, mid + 1, right)
}

console.log(search([1, 2, 3, 4, 5, 6], 4))
