// Creating A Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// CREATING A EMPTY LL
class LinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // Adding New Adding node at end in LL (PUSH)
    push(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removing a item from end (POP)
    pop() {
        if (this.length == 0) return undefined;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        let temp = this.head;
        let previous = temp;
        while (temp.next != null) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;
        return temp;
    }

    // Unshift element in an LL
    shift() {
        if (this.length == 0) return undefined;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // Shift elements from front
    unshift(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Getting an item 
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // insert new Node 
    insert(value, index) {
        let newNode = new Node(value);
        if (index == 0) {
            return this.unshift(value);
        }
        if (index == this.length) {
            return this.push(value);
        }
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return this;
    }

    // Remove ele from index;
    remove(index) {
        if (index == 0) {
            this.shift();
        }
        if (index == this.length - 1) {
            this.pop();
        }
        let temp = this.get(index - 1);
        let curr = this.get(index)
        temp.next = curr.next;
        temp.next = null;
        this.length--;
        return this;
    }


    // Set element at index
    set(index, value) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.get(index);
        if (temp) return temp.value = value;
        return this;
    }

    // reverse the ll
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let pre = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    }
}



// let LL = new LinkedList(0);
// LL.push(1);
// LL.push(2);
// LL.push(3);
// LL.push(4);



class nodu {
    constructor(val) {
        this.val = val;
        this.next = null;
        
    }
}
class LL {
    constructor() {
        this.head = null;
        this.head = null;
        this.length = 0;
    }
    
    push(val) {
        let n = new nodu(val)
        if (this.head == null) {
            this.head = n;
            this.tail = n
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length++;
        return this;
    }
    
    
    pop() {
        if (this.length == 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let temp = this.head;
        let previous = temp;
        while (temp.next !== null) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;
        return temp;
    }
    
    
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i <index;i++){
            temp = temp.next;
        }
        return temp;
    }
}


const newLL = new LL();
newLL.push(6);
newLL.push(2);
newLL.push(3);
newLL.push(4);
// newLL.pop()
let heavy = newLL.get(2)
console.log(heavy);

module.exports = LL