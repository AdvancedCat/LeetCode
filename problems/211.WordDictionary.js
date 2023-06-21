var WordDictionary = function() {
    this.wordMap = {}
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    const wordLength = word.length
    this.wordMap[wordLength] = this.wordMap[wordLength] || []
    this.wordMap[wordLength].push(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const wordLength = word.length
    if (!(wordLength in this.wordMap)) {
        return false
    }

    if (word.includes('.')) {
        const reg = new RegExp(word)
        return this.wordMap[wordLength].some(item => reg.test(item))
    } else {
        return this.wordMap[wordLength].includes(word)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
