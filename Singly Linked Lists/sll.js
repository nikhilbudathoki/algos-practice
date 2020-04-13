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

        unshift(val) {
                let newNode = new Node(val);
                if (!this.head) {
                        this.head = newNode;
                        this.tail = newNode;
                }
                else {
                        newNode.next = this.head;
                        this.head = newNode;
                }
                ++this.length;
                return this;
        }

        get(index) {
                if (index < 0 ||
                        this.length === 0 ||
                        index >= this.length) {
                        return undefined
                };

                let curNode = this.head;

                for (let i = 0; i < index; ++i) {
                        curNode = curNode.next;
                        if (!curNode) return undefined;
                }

                return curNode;
        }

        set(index, val) {
                // if (index < 0 || index >= this.length) {
                //         return undefined;
                // }

                // let curNode = this.head;
                // let counter = 0;
                // while (counter < index) {
                //         curNode = curNode.next;
                //         ++counter;
                // }
                // curNode.val = val;
                // return this;
                var curNode = this.get(index);
                if (!curNode) return false;
                curNode.val = val;
                return true;
        }

        insert(index, val) {
                if (index < 0 || index > this.length) return false;
                if (index === length) return !!this.push(val); // !! is "Not Not" which simply is a way to cast as boolean
                if (index === 0) return !!this.unshift(val);

                var newNode = new Node(val);
                var prevNode = this.get(index - 1);
                var curNode = prevNode.next;
                prevNode.next = newNode;
                newNode.next = curNode;
                ++this.length;
                return true;
        }

        remove(index) {
                if (index < 0 || index > length) return undefined;
                if (index === length - 1) return this.pop();
                if (index === 0) return this.shift();

                let prevNode = this.get(index - 1);
                let removedNode = prevNode.next;

                prevNode.next = removedNode.next;
                --this.length;
                return removedNode;
        }
}

let sample = new SinglyLinkedList();
sample.push("HI");
sample.push("Jude");
sample.push("Don't")
sample.push("make");
sample.push("it");
sample.push("bad");
console.log(sample.get(3).val);