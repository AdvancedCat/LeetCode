/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const isFirstLonger = word1.length >= word2.length
    const minLen = Math.min(word1.length, word2.length)
    let result = ''

    for (let i = 0; i < minLen; i++) {
        result += word1.charAt(i) + word2.charAt(i)
    }

    if (isFirstLonger) {
        result += word1.slice(minLen)
    } else {
        result += word2.slice(minLen)
    }

    return result
}

console.log(mergeAlternately('abc', 'def'))
