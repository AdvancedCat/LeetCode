var longestPalindrome = function(s) {
    let charMap = {}
    s.split('').forEach(char => {
        if (char in charMap) {
            charMap[char] += 1
        } else {
            charMap[char] = 1
        }
    })

    const countArr = Object.values(charMap).sort((a, b) => b - a)
    let evenCount = 0,
        longest = 0
    longest = countArr.reduce((len, cur) => {
        if (cur % 2 !== 0) {
            evenCount++
        }
        return len + cur
    }, 0)

    return evenCount > 1 ? longest - evenCount + 1 : longest
}

export default longestPalindrome
