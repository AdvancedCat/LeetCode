// @see: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next && n === 1) return null

    const rootHead = head

    let pointer = head,
        cur = head,
        count = 0,
        prev = null

    while (cur) {
        cur = cur.next
        count++
        if (count > n) {
            prev = pointer
            pointer = pointer.next
        }
    }

    if (count < n) return rootHead

    if (prev === null) return rootHead.next

    prev.next = pointer.next

    return rootHead
}
