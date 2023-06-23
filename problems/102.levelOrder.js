// @see: https://leetcode.cn/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    let stack = [root]
    const result = []

    while (stack.length !== 0) {
        let tempArr = [],
            tempStack = []
        stack.forEach(node => {
            tempArr.push(node.val)
            if (node.left) {
                tempStack.push(node.left)
            }
            if (node.right) {
                tempStack.push(node.right)
            }
        })
        result.push(tempArr)
        stack = tempStack
    }

    return result
}
