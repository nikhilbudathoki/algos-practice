/*
Important concepts:
- Separate Chaining
- Linear Probing
- Collisions in hash table
*/
function hash(key, numBuckets) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); ++i) {
                let char = key[i];
                let value = char.charCodeAt(0) - 96;
                total += (total * WEIRD_PRIME + value) % numBuckets;
        }
        return total;
}


class HashTable {
        constructor(size = 53) {
                this.keyMap = new Array(size);
        }
}