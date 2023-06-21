/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let cur = 0
    const minLength = Math.min(...strs.map(str => str.length))

    while (cur < minLength) {
        let char = strs[0][cur],
            isOk = true
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][cur] !== char) {
                isOk = false
            } else {
                continue
            }
        }
        if (isOk) cur++
        else {
            cur--
            break
        }
    }

    return cur > -1 ? strs[0].slice(0, cur + 1) : ''
}
