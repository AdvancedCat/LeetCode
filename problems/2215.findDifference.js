/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const aSet = new Set(nums1),
        bSet = new Set(nums2)

    const answer = [new Set(), new Set()]

    for (let i = 0; i < nums1.length; i++) {
        if (!bSet.has(nums1[i])) {
            answer[0].add(nums1[i])
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!aSet.has(nums2[i])) {
            answer[1].add(nums2[i])
        }
    }

    return [Array.from(answer[0]), Array.from(answer[1])]
}
