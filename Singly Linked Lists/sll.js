/*
Single Linked List structure  
uses a node structure that has data
and a pointer to which Node is next

These lists fare much better if the access
is often only needed for the top and 
one-way insertions happen a lot(for example stack)
because those two operations are 
O(1) in a SLL, whereas they are 
O(n) worst case in an array since you'd
have to re-index the array
*/

class Node {
        constructor(val) {
                this.val = val;
                this.next = null;
        }
}

class SinglyLinkedList {
        constructor() {
                this.length = 0;
                this.head = null;
                this.tail = null;
        }

        push(val) {
                var newNode = new Node(val);
                if (!this.head) {
                        this.head = newNode;
                        this.tail = newNode;
                }
                else {
                        this.tail.next = newNode;
                        this.tail = newNode;
                }
                ++this.length;
                return this;
        }

        // Remove tail from list
        pop() {
                if (!this.head) {
                        return undefined;
                }
                let newTail = this.head;
                let curTail = newTail.next;
                while (curTail.next) {
                        newTail = curTail;
                        curTail = curTail.next;
                        console.log("=>", newTail.val, curTail.val);
                }
                this.tail = newTail;
                this.tail.next = null;
                --this.length;
                // Case if there was only one element in list
                if (this.length === 0) {
                        this.head = null;
                        this.head = null;
                }
                return curTail;
        }

        // Remove head from list
        shift() {
                if (length === 0) return undefined;
                let curHead = this.head;
                this.head = this.head.next;
                --this.length;
                if (this.length === 0) {
                        this.tail = null;
                        this.head = null;
                }
                return curHead;
        }
}

let sample = new SinglyLinkedList();
sample.push("HI");
sample.push("Jude");
sample.push("Don't")
sample.push("make");
sample.push("it");
sample.push("bad");
let answer = sample.pop();
console.log("===", answer.val);