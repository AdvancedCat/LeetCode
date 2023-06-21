/**
 *
 * @param {*} list 一个升序的数组
 * @param {*} left
 * @param {*} right
 */
export default function binarySearch(list, target, left, right) {
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
