class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    // Insert Node in BST
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (value < temp.value) {
                if (temp.left == null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right == null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    // LEVEL ORDER TRAVERSAL
    BFS() {
        // level order traversal
        let currentNode = this.root;
        let queue = []
        let results = []
        queue.push(currentNode)
        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        return results;
    }

    // Depth First Search
    DFSpreorder(){
        let results = [];
        function traverse(currentNode){
            results.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root);
        return results;
    }



}


let myTree = new BST();
myTree.insert(50);
myTree.insert(30);
myTree.insert(20);
myTree.insert(40);
myTree.insert(70);
myTree.insert(60);
myTree.insert(80);
let arr = myTree.BFS()
console.log(arr);
let DFSPRE= myTree.DFSpreorder();
console.log(DFSPRE);

console.log(myTree);