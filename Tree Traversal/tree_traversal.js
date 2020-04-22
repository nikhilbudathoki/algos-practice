/*
- Node can't point to a sibling in a tree(it'll be a graph then)
- Trees need a singular root
*/

class Node {
        constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
        }
}

class BST {
        constructor() {
                this.root = null;
        }
        /*
        Time Complexity: O(log n)
        */
        insert(val) {
                let newNode = new Node(val);
                if (!this.root) {
                        this.root = newNode;
                        return this;
                }

                let current = this.root;
                while (true) {
                        if (val < current.value) {
                                if (!current.left) {
                                        current.left = newNode;
                                        return this;
                                }
                                current = current.left;
                                continue;
                        }
                        else if (val > current.value) {
                                if (!current.right) {
                                        current.right = newNode;
                                        return this;
                                }
                                current = current.right;
                                continue;
                        }
                        if (val = current.val) {
                                return this;
                        }
                }
        }

        /*
        Time Complexity: O(log n)
        */
        find(val) {
                if (!this.root) return false;

                let current = this.root;
                let found = false;
                while (current) {
                        if (val < current.value) {
                                current = current.left;
                                continue;
                        }
                        else if (val > current.value) {
                                current = current.right;
                        }
                        else {
                                return true;
                        }

                }
                return false;
        }
        BFS() {
                let queue = [];
                let data = [];
                queue.push(this.root);
                let curNode = this.root;
                while (queue.length > 0) {
                        curNode = queue.shift();
                        data.push(curNode.value);
                        if (curNode.left) queue.push(curNode.left);
                        if (curNode.right) queue.push(curNode.right);
                }
                return data;
        }
        /*
        Visit the root,
        Visit the entire left side,
        Visit the entire right side
        */
        DFSPreOrder() {
                let data = [];
                function traverse(node) {
                        data.push(node.value);
                        node.left && traverse(node.left);
                        node.right && traverse(node.right);
                }
                traverse(this.root);
                return data;
        }

        /*
        Visit the entire left side,
        Visit the entire right side,
        Visit the root
        */
        DFSPostOrder() {
                let data = [];
                function traverse(node) {
                        node.left && traverse(node.left);
                        node.right && traverse(node.right);
                        data.push(node.value);
                }
                traverse(this.root);
                return data;
        }

        /*
        Visit the entire left side,
        Visit the node,
        Visit the entire right side
        */
        DFSInOrder() {
                let data = [];
                function traverse(node) {
                        node.left && traverse(node.left);
                        data.push(node.value);
                        node.right && traverse(node.right);
                }
                traverse(this.root);
                return data;
        }

}



var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
