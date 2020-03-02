// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 思路：P(i, j) = true if S[i, j]是回文字符串  otherwise P(i, j) = false
 *      则有 P(i, j) = P(i+1, j-1) && (Si === Sj)
 *
 * 于是需要构建一个二维数组dp[i][j]，记录区间(i, j)的字符串是否为回文字符串
 * 边界：dp[0][0] = true; dp[0][1] = S0===S1; dp[1][0] = S1===S0
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return ''
    if (s.length === 1) return s

    // 记录子字符串中最长的回文子串的长度和起始位置
    let len = s.length,
        dp = [],
        cache = [],
        maxLen = 1,
        start = 0

    for (let i = 0; i < len; i++) {
        cache[i] = false
    }
    cache[0] = true

    for (let j = 1; j < len; j++) {
        dp = new Array(j).fill(false)
        for (let i = 0; i < j; i++) {
            if (s[i] === s[j]) {
                if (j - i < 3) {
                    dp[i] = true
                } else {
                    dp[i] = cache[i + 1]
                }
            } else {
                dp[i] = false
            }
            // 因为j在当前循环体未变
            // 只要 dp[i] == true 成立，就表示子串 s[i, j] 是回文，此时记录回文长度和起始位置
            if (dp[i]) {
                let curLen = j - i + 1
                if (curLen > maxLen) {
                    maxLen = curLen
                    start = i
                }
            }
        }
        cache = dp
    }

    return s.slice(start, start + maxLen)
}

/**
 * 时间复杂度： O(n^2) + O(n) = O(n^2)
 * 空间复杂度： O(n)
 */

export default longestPalindrome
