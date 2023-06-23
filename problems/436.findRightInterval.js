// @see: https://leetcode.cn/problems/find-right-interval/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const startMap = new Map()
    let maxStart = -Infinity
    intervals.forEach((interval, idx) => {
        const start = interval[0]
        startMap.set(start, idx)
        maxStart = start > maxStart ? start : maxStart
    })

    const result = []
    intervals.forEach((interval, idx) => {
        const [start, end] = interval
        if (start === end) {
            result.push(idx)
            return
        }
        let i = end
        while (i <= maxStart) {
            if (startMap.has(i)) {
                result.push(startMap.get(i))
                break
            }
            i++
        }
        if (i > maxStart) result.push(-1)
    })

    return result
}

/**
 * 时间： O(n^2)
 * 空间： O(n)
 */
