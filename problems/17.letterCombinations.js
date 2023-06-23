// @see: https://leetcode.cn/problems/letter-combinations-of-a-phone-number/

const digitLetter = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}
const digitLetters = {}
Object.keys(digitLetter).forEach(digit => {
    digitLetters[digit] = digitLetter[digit].split('')
})

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length <= 0) return []
    if (digits.length === 1) return digitLetters[digits[0]]
    const result = []
    const firstDigit = digits[0]
    for (let i = 0; i < digitLetters[firstDigit].length; i++) {
        let char = digitLetters[firstDigit][i]
        const rest = letterCombinations(digits.slice(1))
        rest.forEach(str => {
            result.push(char + str)
        })
    }

    return result
}
