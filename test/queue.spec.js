import Queue from "../quz/Queue";

describe('test for queue', () => {
    it ('test for enqueue', () => {
        let list1 = new Queue()
        list1.enQueue(1);
        list1.toString().should.equal('1');
    });
    it ('test for dequeue', () => {
        let list1 = new Queue();
        list1.enQueue(1);
        list1.enQueue(2);
        list1.enQueue(3);
        list1.deQueue();
        list1.toString().should.equal('23')
    })
    it ('test for empty', () => {
        let list1 = new Queue();
        const a = list1.isEmpty()
        a.should.eql(true);
        list1.enQueue(1);
        const b = list1.isEmpty();
        b.should.eql(false);
    })
    it ('test for string', () => {
        let list1 = new Queue();
        should.not.exist(list1.toString());
        list1.enQueue(1);
        list1.toString().should.equal('1');
    })
});