/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordList = s.split(/\s/).filter(Boolean)

    wordList = wordList.reverse()

    console.log(wordList)

    return wordList.join(' ')
}
