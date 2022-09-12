class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeue() {

        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.first = null
            this.last = null
        }
        this.first = this.first.next
        temp.next = null
        this.length--;
        return temp;
    }
}

let myQueue = new Queue(11)
myQueue.enqueue(3)
myQueue.enqueue(23)
myQueue.enqueue(7)