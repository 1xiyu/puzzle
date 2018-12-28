import HashTable from '../quz/HashTable';

describe('test for hashtable', () => {
    it ('test for length', () => {
        var hash1 = new HashTable();
        var hash2 = new HashTable(64);
        hash1.buckets.length.should.be.equal(32);
        hash2.buckets.length.should.be.equal(64);
    })
    
    it ('test for hash func', () => {
        var hash1 = new HashTable();
        hash1.hash('a').should.be.equal(1);
        hash1.hash('!').should.be.equal(1);
    })
    it ('test for set', () => {
        var hash1 = new HashTable();
        hash1.set('a', 'hello');
        var hash1Key = hash1.hash('a');
        const stringer = obj => obj.value + obj.key;
        hash1.buckets[hash1Key].toString(stringer).should.be.equal('helloa');
        hash1.set('!', 'world');
        hash1.buckets[hash1Key].toString(stringer).should.be.equal('helloaworld!');
    })
    it ('test for has', () => {
        var hash1 = new HashTable();
        hash1.set('a', 'hello');
        hash1.has('a').should.be.true();
    })

    it ('test for getKeys', () => {
        var hash1 = new HashTable();
        hash1.set('a', 'hello'),
        hash1.set('b', 'world');
        hash1.getKeys().should.be.equal('a,b')
    })

    it ('test for delete', () => {
        var hash1 = new HashTable();
        hash1.set('a', 'hello');
        hash1.set('b', 'world');
        const hashKey1 = hash1.hash('a');
        const hashKey2 = hash1.hash('b');
        hash1.delete('a');
        const stringer = obj => obj.value + obj.key;

        hash1.delete('a');
        should.not.exist(hash1.buckets[hashKey1].head);
        should.not.exist(hash1.buckets[hashKey1].tail);

        hash1.buckets[hashKey2].toString(stringer).should.be.equal('worldb');
    })
})