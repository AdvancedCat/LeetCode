export class LinkList {
    constructor() {
        this.head = null
        this.cur = null
        this.tail = null
        this.length = 0
    }

    next() {
        if (this.head === null || this.cur.next === null) {
            return null
        }

        this.cur = this.cur.next
        return this
    }

    add(item) {
        let node = new Node(item)

        if (this.length === 0) {
            this.head = node
            this.cur = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length++

        return this
    }

    reset() {
        this.cur = this.head

        return this
    }

    clear() {
        this.head = this.cur = this.tail = null
        this.length = 0

        return this
    }

    print(seperator = '') {
        let arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(this.cur.value)
            this.next()
        }

        this.reset()

        return arr.join(seperator)
    }
}

LinkList.from = function(arr = []) {
    let linkList = new LinkList()

    arr.forEach(item => {
        linkList.add(item)
    })

    return linkList
}

export class Node {
    constructor(item) {
        this.value = item
        this.next = null
    }
}
