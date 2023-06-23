// @see: https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/

var isValidSerialization = function(preorder) {
    const n = preorder.length
    let i = 0
    const stack = [1]
    while (i < n) {
        if (!stack.length) {
            return false
        }
        if (preorder[i] === ',') {
            ++i
        } else if (preorder[i] === '#') {
            stack[stack.length - 1]--
            if (stack[stack.length - 1] === 0) {
                stack.pop()
            }
            ++i
        } else {
            // 读一个数字
            while (i < n && preorder[i] !== ',') {
                ++i
            }
            stack[stack.length - 1]--
            if (stack[stack.length - 1] === 0) {
                stack.pop()
            }
            stack.push(2)
        }
    }
    return stack.length === 0
}
