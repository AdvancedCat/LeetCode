import { addTwoNumbers } from '../2.add-two-numbers'
import { LinkList } from '../../data_structure/LinkList'

describe('two sum', () => {
    it('case 1', () => {
        let l1 = LinkList.from([2, 4, 3])
        let l2 = LinkList.from([5, 6, 4])

        let list = addTwoNumbers(l1, l2)

        expect(list.length).toBe(3)
        expect(list.print()).toBe('708')
    })

    it('case 2', () => {
        let l1 = LinkList.from([7, 2])
        let l2 = LinkList.from([1, 3, 4])

        let list = addTwoNumbers(l1, l2)

        expect(list.length).toBe(3)
        expect(list.print()).toBe('854')
    })
})
