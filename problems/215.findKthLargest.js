/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return findKthByQS(nums, k)
}

function findKthByQS(arr, k) {
    let len = arr.length
    let pos = Math.floor(Math.random() * len)
    let pivot = arr[pos]
    let leftArr = [],
        rightArr = []

    for (let i = 0; i < len; i++) {
        if (i === pos) continue
        const val = arr[i]
        if (val > pivot) leftArr.push(val)
        if (val <= pivot) rightArr.push(val)
    }

    if (leftArr.length === k - 1) return pivot
    if (leftArr.length < k - 1) {
        return findKthByQS(rightArr, k - leftArr.length - 1)
    }
    if (leftArr.length > k - 1) {
        return findKthByQS(leftArr, k)
    }
}

export default findKthLargest
