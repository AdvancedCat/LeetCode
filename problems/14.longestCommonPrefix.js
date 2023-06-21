/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = 0,
        cur = 0
    const minLength = Math.min(...strs.map(str => str.length))

    while (cur < minLength) {
        let char = strs[0][cur],
            isOk = true
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][cur] !== char) {
                isOk = false
                break
            } else {
                continue
            }
        }
        if (isOk) {
            common++
            cur++
        } else {
            break
        }
    }

    return common > 0 ? strs[0].slice(0, common) : ''
}
