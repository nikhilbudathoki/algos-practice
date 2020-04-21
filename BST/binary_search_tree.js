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
}