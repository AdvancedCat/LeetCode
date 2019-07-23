import { LinkList } from '../data_structure/LinkList'

/**
 * @param {LinkList} l1
 * @param {LinkList} l2
 * @return {LinkList}
 */
export function addTwoNumbers(l1, l2) {
    let len1 = l1.length
    let len2 = l2.length
    let shortList = len1 < len2 ? l1 : l2
    let longList = len1 > len2 ? l1 : l2
    let reminder = 0
    let list = new LinkList()

    for (let i = 0; i < shortList.length; i++) {
        let v1 = l1.cur.value,
            v2 = l2.cur.value,
            sum = v1 + v2 + reminder

        reminder = sum > 9 ? 1 : 0
        let r = sum > 9 ? sum - 10 : sum

        list.add(r)
        l1.next()
        l2.next()
    }

    for (let i = 0; i < longList.length - shortList.length; i++) {
        let v = longList.cur.value
        let sum = v + reminder
        reminder = sum > 9 ? 1 : 0
        let r = sum > 9 ? sum - 10 : sum
        list.add(r)
        longList.next()
    }

    return list
}
