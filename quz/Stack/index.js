import { LinkedList } from '../LinkedList';

class Stack extends LinkedList {
    constructor(head, tail = null) {
        super(head, tail);
    }
    isEmpty() {
        return !this.head;
    }
    push(value) {
        this.prepend(value);
    }
    pop() {
        this.deleteHead();
    }
    toString() {
        return super.toString();
    }
}

export default Stack;