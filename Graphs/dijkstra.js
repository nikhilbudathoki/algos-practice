/*
Algorithm for shortest path between nodes in a graph
Uses priority queue
*/


/*
Definitions for priority queue
*/
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
        enqueue(val) {
                this.values.push(val);
                let index = this.values.length - 1;
                while (index > 0) {
                        let element = this.values[index];
                        let parentIndex = Math.floor((index - 1) / 2);
                        let parent = this.values[parentIndex];
                        if (element.priority >= parent.priority) break;
                        this.values[parentIndex] = element;
                        this.values[index] = parent;
                        index = parentIndex;
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

