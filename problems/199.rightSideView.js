// @see: https://leetcode.cn/problems/binary-tree-right-side-view/

// 层序遍历，取最右边的值

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []

    let stack = [root],
        result = []

    while (stack.length !== 0) {
        let tempStack = []
        const length = stack.length
        stack.forEach((node, idx) => {
            if (idx === length - 1) result.push(node.val)
            if (node.left) tempStack.push(node.left)
            if (node.right) tempStack.push(node.right)
        })

        stack = tempStack
    }

    return result
}
