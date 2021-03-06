/*
We can store a heap using an array
*/
class MaxBinaryHeap {
        constructor() {
                this.values = [];
        }
        swap(i, j) {
                let temp = this.values[i];
                this.values[i] = this.values[j];
                this.values[j] = temp;
        }
        insert(val) {
                this.values.push(val);
                let index = this.values.length - 1;
                while (index > 0) {
                        let element = this.values[index];
                        let parentIndex = Math.floor((index - 1) / 2);
                        let parent = this.values[parentIndex];
                        if (element <= parent) break;
                        this.values[parentIndex] = element;
                        this.values[index] = parent;
                        index = parentIndex;
                }
        }
        extractMax() {
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
                                if (leftChild > element) {
                                        swap = leftChildIdx;
                                }
                        }
                        if (rightChildIdx < length) {
                                rightChild = this.values[rightChildIdx];
                                if (
                                        (swap === null && rightChild > element) ||
                                        (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(52);
heap.insert(37);

console.log(heap.values);
heap.extractMax();
console.log(heap.values);