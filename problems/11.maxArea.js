// 双指针

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let left = 0,
        right = heights.length - 1

    let tempMaxArea = 0

    while (left < right) {
        const area = Math.min(heights[left], heights[right]) * (right - left)
        if (area > tempMaxArea) {
            tempMaxArea = area
        }
        if (heights[left] > heights[right]) right--
        else left++
    }

    return tempMaxArea
}
