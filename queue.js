// IMPLEMENT QUEUE USING LL

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (this.length == 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length == 0) {
            return undefined;
        }
        if (this.length == 0) {
            this.first = null;
            this.last = null;
        }

        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}
