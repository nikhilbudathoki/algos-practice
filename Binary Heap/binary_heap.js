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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(52);
heap.insert(37);

console.log(heap.values);