import { LinkedList } from '../LinkedList';
const HashTableMinSize = 32;
class HashTable {
    constructor(size = HashTableMinSize) {
        this.buckets = Array(size).fill(null).map(() => new LinkedList());
        this.keys = {};
    }
    hash(key) {
        const hash = Array.from(key).reduce((acc, cur) => acc += cur.charCodeAt(), 0);
        return hash % this.buckets.length;
    }
    set(key, value) {
        const hashKey = this.hash(key);
        this.keys[key] = hashKey;
        const hashBucket = this.buckets[hashKey];
        const findEl = hashBucket.find(null, nodeValue => nodeValue && nodeValue.key === key);
        if (findEl) {
            findEl.value.value = value;
        } else {
            hashBucket.append({key, value});
        }
    }
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.keys, key);
    }
    delete(key) {
        const hashKey = this.hash(key);
        this.keys[hashKey] && delete this.keys[hashKey];
        const hashBucket = this.buckets[hashKey];
        const findEl = hashBucket.find(null, nodeValue => nodeValue.key === key);
        if (findEl) {
            hashBucket.delete(findEl.value);
            return findEl;
        } else {
            return null;
        }
    }
    getKeys() {
        return Object.keys(this.keys).toString();
    }
}

export default HashTable;