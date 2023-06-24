// 分治法合并两个有序链表，之后逐步合并至完整链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null

    const resultList = []
    const length = lists.length
    const pointers = Array(length)
        .fill(null)
        .map((_, idx) => {
            return lists[idx] || null
        })

    let isFinished = false

    while (!isFinished) {
        const tempValueList = pointers.map(pointer => pointer?.val ?? null)
        const [max, maxIdx] = pickMaxValueAndIndex(tempValueList)
        if (maxIdx > -1) {
            resultList.push(max)
            pointers[maxIdx] =
                'next' in pointers[maxIdx] ? pointers[maxIdx].next : null
        }

        isFinished = pointers.reduce((isOk, cur) => {
            return isOk && !cur
        }, true)
    }

    let head = null,
        rootHead = null
    resultList.forEach(element => {
        const node = new ListNode(element)
        if (head) {
            head.next = node
            head = head.next
        } else {
            head = node
            rootHead = head
        }
    })

    return rootHead
}

function pickMaxValueAndIndex(list) {
    let max = Infinity,
        idx = -1
    if (list.length === 0) return [max, idx]
    list.forEach((element, index) => {
        if (typeof element === 'number' && element < max) {
            max = element
            idx = index
        }
    })

    return [max, idx]
}
