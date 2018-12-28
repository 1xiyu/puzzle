class ListNode {
    constructor (value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous
    }
}

class LinkedList {
    constructor (head, tail = null) {
        this.head = head;
        this.tail = tail
    }
    append(value) {
        let newNode = new ListNode(value);
        if (this.head) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        return this;
    }
    delete(value) {
        if (!this.head) {
            return
        }
        let deleteNode;
        while(this.head && this.head.value == value) {
            deleteNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        let currentNode = this.head;
        if (!deleteNode) {
            while (currentNode.next) {
                if (currentNode.next.value == value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if (currentNode.next) {
                        currentNode.next.previous = currentNode;
                    }
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value == value) {
            this.tail = currentNode;
        }
        return deleteNode;
    }
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.previous = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }
    toString() {
        if (!this.head) {
            return
        }
        let temp = '';
        let currentNode = this.head;
        while(currentNode) {
            temp += currentNode.value;
            currentNode = currentNode.next;
        }
        return temp;
    }
}

export {
    ListNode,
    LinkedList
}