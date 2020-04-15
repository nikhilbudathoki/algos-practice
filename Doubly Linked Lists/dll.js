/*
Unlike a singly linked list, in a doubly linked list,
each node has a pointer to next and previous
*/

class Node {
        constructor(val) {
                self.val = val;
                self.next = null;
                self.prev = null;
        }
}

class DoublyLinkedList {
        constructor() {
                this.head = null;
                this.tail = null;
                this.length = 0;
        }

}