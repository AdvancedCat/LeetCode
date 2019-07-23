import chalk from 'chalk'
import { LinkList } from '../LinkList'

describe(chalk.magenta.bold('DataStructure - LinkList'), () => {
    it('case 1', () => {
        const arr = [1, 2, 3, 4]
        const linkList = LinkList.from(arr)

        expect(linkList.head.value).toBe(1)
        expect(linkList.tail.value).toBe(4)
        expect(linkList.cur.value).toBe(1)
        expect(linkList.next().cur.value).toBe(2)
        linkList.reset()
        expect(linkList.cur.value).toBe(1)
        expect(linkList.length).toBe(4)
    })
})
