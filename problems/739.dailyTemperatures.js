/**
 * 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/daily-temperatures
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    return dailyTemperaturesByStack(temperatures)
    // return expensiveSolution(temperatures)
}

/**
 * 暴力求解
 */
function expensiveSolution(temperatures) {
    const result = [],
        len = temperatures.length

    for (let i = 0; i < len; i++) {
        const temp = temperatures[i]
        let gap = 0,
            j = i + 1
        for (j = i + 1; j < len; j++) {
            gap++
            if (temperatures[j] > temp) {
                result[i] = gap
                break
            }
        }
        if (j === len) {
            result[i] = 0
        }
    }

    return result
}

/**
 * 单调栈解法
 */

function dailyTemperaturesByStack(temperatures) {
    const len = temperatures.length,
        result = [],
        stack = []
    for (let i = 0; i < len; i++) {
        const temp = temperatures[i]
        if (stack.length !== 0) {
            let top = stack[stack.length - 1]
            while (top && temp > top.temp) {
                result[top.idx] = i - top.idx
                stack.pop()
                top = stack.length > 0 ? stack[stack.length - 1] : null
            }
        }
        stack.push({ temp, idx: i })
    }

    stack.forEach(val => {
        result[val.idx] = 0
    })

    return result
}
