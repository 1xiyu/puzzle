import { ListNode, LinkedList } from '../quz/DoubleLinkedList';

describe('test for double-linked-list', () => {
    it('test for insert', () => {
        let list1 = new LinkedList();
        let node1 = new ListNode(1);
        list1.append(1);
        list1.head.should.eql(node1);
        list1.tail.should.eql(node1);
        list1.append(2);
        list1.head.value.should.equal(1);
        should.not.exist(list1.head.previous);
        list1.tail.value.should.equal(2);
    });

    it('test for delete', () => {
        let list1 = new LinkedList();
        list1.append(1);
        list1.delete(1);
        list1.append(2);
        list1.append(3);
        list1.append(4);
        list1.delete(4);
        // test for delete head / tail / not head and not tail
        // console.dir(list1);
    });

    it('test for reverse', () => {
        let list1 = new LinkedList();
        list1.append(1).append(2).append(3).append(4).reverse();
        String(list1.toString()).split('').should.eql(['4','3','2','1']);
        console.dir(list1);
    });
});