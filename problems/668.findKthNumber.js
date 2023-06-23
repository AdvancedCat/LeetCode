// @see: https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/
/**
 * m * n 代表了 在 m n 的矩阵中有多少个格子， 第 k 个数一定在 (i, j) 与 (i+1, j+1) 之间
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    let left = 1,
        right = m * n
    while (left < right) {
        const x = left + Math.floor((right - left) / 2)
        let count = Math.floor(x / n) * n
        for (let i = Math.floor(x / n) + 1; i <= m; ++i) {
            count += Math.floor(x / i)
        }
        if (count >= k) {
            right = x
        } else {
            left = x + 1
        }
    }
    return left
}
