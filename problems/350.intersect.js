/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const aMap = getListMap(nums1)
    const bMap = getListMap(nums2)

    const minMap = aMap.size <= bMap.size ? aMap : bMap
    const maxMap = aMap.size > bMap.size ? aMap : bMap

    const result = []

    for (let [key, value] of minMap.entries()) {
        if (maxMap.has(key)) {
            const size = Math.min(value, maxMap.get(key))
            result.push(...Array(size).fill(key))
        }
    }

    return result
}

function getListMap(list) {
    const numMap = new Map()

    list.forEach(num => {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1)
        } else {
            numMap.set(num, 1)
        }
    })

    return numMap
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
