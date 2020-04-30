// Binary heap customized for dijkstra's algo
class Node {
        constructor(val, priority) {
                this.val = val;
                this.priority = priority;
        }
}


class PriorityQueue {
        constructor() {
                this.values = [];
        }
        swap(i, j) {
                let temp = this.values[i];
                this.values[i] = this.values[j];
                this.values[j] = temp;
        }
        enqueue(val, priority) {
                this.values.push(new Node(val, priority));
                this.bubbleUp();
        }

        bubbleUp() {
                let idx = this.values.length - 1;
                const element = this.values[idx];
                while (idx > 0) {
                        let parentIdx = Math.floor((idx - 1) / 2);
                        let parent = this.values[parentIdx];
                        if (element.priority >= parent.priority) break;
                        this.values[parentIdx] = element;
                        this.values[idx] = parent;
                        idx = parentIdx;
                }
        }

        dequeue() {
                if (this.values.length === 1) {
                        return this.values.pop();
                }
                this.swap(0, this.values.length - 1);
                let poppedNode = this.values.pop();
                this.sinkDown();
                return poppedNode;
        }
        sinkDown() {
                let index = 0;
                const length = this.values.length;
                const element = this.values[0];
                while (true) {
                        let leftChildIdx = 2 * index + 1;
                        let rightChildIdx = 2 * index + 2;
                        let leftChild, rightChild;
                        let swap = null;

                        if (leftChildIdx < length) {
                                leftChild = this.values[leftChildIdx];
                                if (leftChild.priority < element.priority) {
                                        swap = leftChildIdx;
                                }
                        }
                        if (rightChildIdx < length) {
                                rightChild = this.values[rightChildIdx];
                                if (
                                        (swap === null && rightChild.priority < element.priority) ||
                                        (swap !== null && rightChild.priority < leftChild.priority)
                                ) {
                                        swap = rightChildIdx;
                                }
                        }
                        if (swap === null) break;
                        this.swap(index, swap);
                        index = swap;
                }
        }
}

module.exports = PriorityQueue;