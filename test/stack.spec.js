import Stack from '../quz/Stack';

describe('test for stack', () => {
    it('test for push', () => {
        let list1 = new Stack();
        list1.push(1);
        list1.toString().should.equal('1');
        list1.push(2);
        list1.toString().should.equal('21');
    });
    
    it ('test for pop', () => {
        let list1 = new Stack();
        list1.push(1);
        list1.push(2);
        list1.push(3);
        list1.pop();
        list1.toString().should.equal('21');
    })

    it ('test for isEmpty', () => {
        let list1 = new Stack();
        should.not.exist(list1.toString());
    })

    it ('test for tostring', () => {
        let list1 = new Stack();
        should.not.exist(list1.toString());
        list1.push(1);
        list1.toString().should.equal('1');
    })
})