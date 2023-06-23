// @see: https://leetcode.cn/problems/score-of-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const rootNode = new Node()

    let root = rootNode
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if (char === '(') {
            let preRoot = root
            let childLen = preRoot.children.length
            preRoot.children[childLen] = new Node()
            root = preRoot.children[childLen]
            root.parent = preRoot
        } else if (char === ')') {
            root = root.parent
        }
    }
}

class Node {
    constructor() {
        this.score = 0
        this.children = []
        this.parent = null
    }
}

function calcScore(root) {
    if (root.children.length === 0) return 0.5

    return root.children.reduce((total, child) => {
        return total + 2 * calcScore(child)
    }, 0)
}
