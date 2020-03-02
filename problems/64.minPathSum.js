// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

// 链接：https://leetcode-cn.com/problems/minimum-path-sum

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0) return 0

    // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]

    let dp = [...grid[0]]
    let cache = []
    let cols = grid[0].length
    let rows = grid.length

    for (let i = 1; i < cols; i++) {
        dp[i] = dp[i] + dp[i - 1]
    }

    for (let i = 1; i < rows; i++) {
        cache[0] = dp[0] + grid[i][0]
        for (let j = 1; j < cols; j++) {
            cache[j] = Math.min(dp[j], cache[j - 1]) + grid[i][j]
        }
        dp = [...cache]
    }

    return dp[cols - 1]
}

export default minPathSum
