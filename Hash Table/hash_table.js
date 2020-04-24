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
        hash(key) {
                let total = 0;
                let WEIRD_PRIME = 31;
                for (let i = 0; i < Math.min(key.length, 100); i++) {
                        let char = key[i];
                        let value = char.charCodeAt(0) - 96;
                        total += (total * WEIRD_PRIME + value) % this.keyMap.length;
                }
                console.log(key, total)
                return total;
        }

        set(key, value) {
                console.log("set_hash");
                let index = this.hash(key);
                if (!this.keyMap[index]) {
                        this.keyMap[index] = [];
                }
                this.keyMap[index].push([key, value]);
        }

        get(key) {
                console.log("get_hash")
                let index = this.hash(key);
                if (this.keyMap[index]) {
                        for (let i = 0; i < this.keyMap[index].length; ++i) {
                                if (this.keyMap[index][i][0] === key) {
                                        return this.keyMap[index][i][1];
                                }
                        }
                }
                return undefined;
        }

        keys() {
                // return all keys of a hashtable
                let keys = [];
                for (let items in this.keyMap) {
                        if (items) {
                                for (let pair in items) {
                                        keys.push(pair[0]);
                                }
                        }
                }
                return keys;
        }

        values() {
                // return all keys of a hashtable
                let valuesArr = [];
                for (let items in this.keyMap) {
                        if (items) {
                                for (let pair in items) {
                                        valuesArr.push(pair[1]);
                                }
                        }
                }
                return valuesArr;
        }


}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log("\n", "TEST CASES BEGIN", '\n');
console.log(ht.get("yellow"));


