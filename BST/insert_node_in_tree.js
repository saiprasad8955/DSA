// create Node
// if root == null then root =newNode
// let temp = this.root
// while loop
// if newNode === temp return undefined
// if < left else > right
// if null insert new node else move to next
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const newNode = new Node(7);


class BST {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) {
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    this.left = newNode;
                    return this;
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    this.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

let myTree = new BST();
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)

myTree.insert(52)
myTree.insert(82)
console.log(BST);
