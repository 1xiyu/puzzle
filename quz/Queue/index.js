import { LinkedList } from '../LinkedList';

class Queue extends LinkedList {
    constructor(head, tail = null) {
        super(head, tail);
    }
    isEmpty() {
        return !this.head;
    }
    deQueue() {
        this.deleteHead();
    }
    enQueue(value) {
        this.append(value);
    }
    toString() {
        return super.toString();
    }
}

export default Queue;