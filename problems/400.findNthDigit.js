// @see: https://leetcode.cn/problems/nth-digit/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map(digit => {
        const max = +Array(digit)
            .fill('9')
            .join('')
        const min = +'1'.padEnd(digit, '0')

        return max - min + 1
    })
    .map((count, idx) => {
        return count * idx
    })

const counts = []
digits.reduce((sum, cur) => {
    counts.push(sum + cur)
    return sum + cur
}, 0)

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let xDigits = 0
    for (let i = 1; i <= counts.length; i++) {
        if (n <= counts[i]) {
            xDigits = i
            break
        }
    }
    const rest = n - counts[xDigits - 1]
    const kTh = Math.ceil(rest / xDigits)
    const number = +'1'.padEnd(xDigits, '0') + kTh - 1
    const xRest = rest - (kTh - 1) * xDigits

    return number.toString().split('')[xRest - 1]
}

console.log(findNthDigit(3))
