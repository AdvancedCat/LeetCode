/**
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    return isSymmetricTreeByIterate(root)
}
/**
 * 递归版本
 * @param {*} aTree
 * @param {*} bTree
 * @returns
 */
function isSymmetricTreeByRecursion(root) {
    return isSymmetricSubTree(root.left, root.right)
}
function isSymmetricSubTree(aTree, bTree) {
    if (!aTree && !bTree) return true
    if ((aTree && !bTree) || (!aTree && bTree)) return false
    if (aTree.val !== bTree.val) return false

    return (
        isSymmetricSubTree(aTree.left, bTree.right) &&
        isSymmetricSubTree(aTree.right, bTree.left)
    )
}

/**
 * 迭代版本
 */
function isSymmetricTreeByIterate(root) {
    const unVisited = [[root.left, root.right]]

    while (unVisited.length > 0) {
        const target = unVisited.pop()
        let l = target[0],
            r = target[1]
        if (!l && !r) continue
        if (!isSymmetricNode(l, r)) return false
        if (l.left) {
            if (r.right) {
                unVisited.push([l.left, r.right])
            } else {
                return false
            }
        } else {
            if (r.right) {
                return false
            }
        }

        if (l.right) {
            if (r.left) {
                unVisited.push([l.right, r.left])
            } else {
                return false
            }
        } else {
            if (r.left) {
                return false
            }
        }
    }

    return true
}

function isSymmetricNode(a, b) {
    if (!a && !b) return true
    if ((a && !b) || (!a && b)) return false
    if (a && b) return a.val === b.val
}
