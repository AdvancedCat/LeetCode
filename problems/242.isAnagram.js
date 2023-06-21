/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = getCharMap(s)
    const tMap = getCharMap(t)

    if (sMap.size !== tMap.size) return false

    for (let [key, value] of sMap.entries()) {
        if (!tMap.has(key)) return false
        if (value !== tMap.get(key)) return false
    }

    return true
}

function getCharMap(str) {
    const charMap = new Map()

    str.split('').forEach(char => {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1)
        } else {
            charMap.set(char, 1)
        }
    })

    return charMap
}
