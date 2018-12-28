import { ListNode, LinkedList } from '../quz/LinkedList';

describe('unit test for LinkedList', function () {
    describe('test for ListNode', () => {
        it ('value === 1 && next === null', () => {
            const node = new ListNode(1);
            node.value.should.equal(1);
            should.not.exist(node.next);
        });
        it ('value === 2 && node1.next === node', () => {
            const node = new ListNode(1);
            const node1 = new ListNode(2, node);
            node1.value.should.equal(2);
            node1.next.should.equal(node);
        })
        it ('is the list empty', () => {
            const list1 = new LinkedList();
            should.not.exist(list1.tail);
            should.not.exist(list1.head);
        })
        it ('is not the list1 empty for a append test', () => {
            const list1 = new LinkedList();
            const node = new ListNode(3);
            list1.append(3);
            list1.head.should.eql(node);
            list1.tail.should.eql(node);
            list1.append(4);
            const likeNode = new ListNode(4);
            list1.tail.should.eql(likeNode);
            list1.head.value.should.equal(3);
            list1.head.next.should.eql(likeNode);
        })

        it('test for prepend', () => {
            const list1 = new LinkedList();
            list1.prepend(2).prepend(1);
            let likeNode1 = new ListNode(2);
            list1.head.value.should.equal(1);
            list1.tail.should.eql(likeNode1);
            should.not.exist(list1.tail.next);
            list1.tail.value.should.equal(2);
        });
        it ('test for delete', () => {
            const list1 = new LinkedList();
            list1.append(1).delete(1);
            should.not.exist(list1.head);
            should.not.exist(list1.tail);
            list1.append(2).append(3).append(4)
            let delElm = list1.delete(3);
            const likeNode1 = new ListNode(4);
            const likeNode2 = new ListNode(3, likeNode1);
            list1.head.next.should.eql(likeNode1);
            delElm.should.eql(likeNode2);
        })
        it ('learn reverse', () => {
            const list1 = new LinkedList();
            list1.append(1).append(2).append(3).append(4).append(5);
            list1.reverse();
        })
        it ('test for reverse', () => {
            const list1 = new LinkedList();
            const list2 = new LinkedList();
            list1.append(1).append(2).append(3).reverse();
            list2.append(3).append(2).append(1);
            list1.should.eql(list2);
        })

        it ('test for toArray', () => {
            const list1 = new LinkedList();
            const arr = list1.append(1).append(2).append(3).toArray();
            arr.should.eql([1,2,3])
        })

        it ('test for tostring', () => {
            const list1 = new LinkedList();
            list1.append(1).append(2);
            list1.toString().should.equal('12');
        })
        it('test for find', () => {
            const list1 = new LinkedList();
            list1.append(1).append(2).append(3);
            should.not.exist(list1.find(0));
            list1.find(1).value.should.equal(1);
        })
    });
});