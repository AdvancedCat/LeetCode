/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const length = nums.length
    const mid = binarySearch(nums, target)

    if (mid === -1) return [-1, -1]

    let i = mid - 1,
        j = mid + 1

    while (i >= 0) {
        if (nums[i] === target) {
            i--
        } else {
            break
        }
    }

    while (j < length) {
        if (nums[j] === target) {
            j++
        } else {
            break
        }
    }

    return [i + 1, j - 1]
}

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
