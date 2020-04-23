/*
We can store a heap using an array
*/
class MaxBinaryHeap {
        constructor() {
                this.values = [];
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
                function swap(arr, i, j) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                }
                swap(this.values, 0, this.values.length - 1);
                let poppedNode = this.values.pop();
                let index = 0;
                while (true) {
                        let parent = this.values[index];
                        let leftIdx = 2 * index + 1;
                        let rightIdx = 2 * index + 2;
                        let lChild = leftIdx > this.values.length ? null : this.values[leftIdx];
                        let rChild = rightIdx > this.values.length ? null : this.values[rightIdx];
                        if (!(lChild || rChild)) break;
                        if (lChild > parent && rChild > parent) {
                                if (lChild > rChild) {
                                        swap(this.values, leftIdx, index);
                                }
                                if (lChild <= rChild) {
                                        swap(this.values, rightIdx, index);
                                }
                                continue;
                        }
                        if (lChild > parent) {
                                swap(this.values, leftIdx, index);
                        }
                        else if (rChild > parent) {
                                swap(this.values, rightIdx, index);
                        }
                        else {
                                break;
                        }
                }
                return poppedNode;
        }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(52);
heap.insert(37);

console.log(heap.values);
heap.extractMax();
console.log(heap.values);