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
        push(val) {
                let newNode = new Node(val);
                if (this.length === 0) {
                        this.head = newNode;
                        this.tail = newNode;
                }
                else {
                        this.tail.next = newNode;
                        newNode.prev = this.tail;
                        this.tail = newNode;
                }
                ++this.length;
                return this;
        }
        pop() {
                if (this.length === 0) return undefined;
                let removed = this.tail;
                if (length === 1) {
                        this.head = null;
                        this.tail = null;
                }
                else {
                        this.tail = removed.prev;
                        this.tail.next = null;
                        removed.prev = null;
                }
                --this.length;
                return removed;
        }
        // shift () removes item from beginning
        shift() {
                if (this.length === 0) return undefined;
                let removed = this.head;
                if (length === 1) {
                        this.head = null;
                        this.tail = null;
                }
                else {
                        this.head = removed.next;
                        this.head.prev = null;
                        removed.next = null;
                }
                --this.length;
                return removed;
        }


}