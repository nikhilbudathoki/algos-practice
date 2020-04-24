/*
Important concepts:
- Separate Chaining
- Linear Probing
- Collisions in hash table
*/

class HashTable {
        constructor(size = 53) {
                this.keyMap = new Array(size);
        }
        _hash(key) {
                let total = 0;
                let WEIRD_PRIME = 31;
                for (let i = 0; i < Math.min(key.length, 100); ++i) {
                        let char = key[i];
                        let value = char.charCodeAt(0) - 96;
                        total += (total * WEIRD_PRIME + value) % this.keyMap.length;
                }
                return total;
        }

        set(key, value) {
                // Hash the key
                let index = this._hash(key);
                // Store the (key, value) tuple at the index of the hashed key
                this.keyMap[index] = [key, value];
                // Implement separate chaining
        }

        get(key) {
                // Hash the key
                let index = this._hash(key);
                // Access the array at the index of the hashed key
                let values = this.keyMap[index];
                // if the accessed tuple's first item === key, return second item(value)
                if (values[0] === key) return values[1];
        }

}