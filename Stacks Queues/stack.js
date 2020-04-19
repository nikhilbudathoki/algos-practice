/*
LIFO: Last-in First Out
*/

class Node {
        constructor(value) {
                this.value = value;
                this.next = null;
        }
}

class Stack {
        constructor() {
                this.first = null;
                this.last = null;
                this.size = null;
        }
        /* The push and pop methods for a SLL are linear time,
        which isn't ideal for a stack's push and pop. 
        This will be a tweaked version
        */
        push(val) {
                var newNode = new Node(val);
                if (this.size === 0) {
                        this.first = newNode;
                        this.last = newNode;
                } else {
                        temp = this.first;
                        this.first = newNode;
                        this.first.next = temp;
                }
                return ++this.size; // This both increments the size and returns incremented value because ++ is to the left!
        }

        pop() {
                if (this.size === 0) return null;
                let popped = this.first;
                if (this.size === 1) {
                        this.last = null;
                }
                this.first = popped.next;
                --this.size;
                return popped;
        }
}