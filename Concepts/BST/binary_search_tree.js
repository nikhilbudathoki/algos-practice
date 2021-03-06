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
}



var tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);