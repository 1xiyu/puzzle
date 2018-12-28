class LinkedList {
    constructor(head, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    append(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode; 
        return this;
    }
    
    find(value, callback) {
        if (!this.head) {
            return;
        }
        let currentNode = this.head;
        let findNode = null;
        while(currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (currentNode.value == value) {
                return findNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        callback && callback();
        return findNode;
    }

    prepend(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.head= new ListNode(value, this.head);
        return this;
    }

    delete(value) {
        if (!this.head) {
            return;
        }
        let deleteNode;
        while (this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head =  this.head.next
        }
        let currentNode = this.head;
        if (!deleteNode) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deleteNode;
    }


    toArray() {
        if (!this.head) {
            return;
        }
        let temp = [];
        let currentNode = this.head;
        while(currentNode) {
            temp.push(currentNode.value);
            currentNode = currentNode.next;
        }   
        return temp; 
    }
    toString(callback) {
        if (!this.head) {
            return
        }
        let temp = '';
        let currentNode = this.head;
        while(currentNode) {
            if (callback) {
                temp += callback(currentNode.value)
            } else {
                temp += currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return temp;
    }
    reverse() {
        let currNode = this.head;
        let prevNode = null;   // 记录变换后的节点链表
        let nextNode = null;
    
        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        // 重置head和tail
        this.tail = this.head;
        this.head = prevNode;
    
        return this;
    }
    deleteHead() {
        if (!this.head) {
            return;
        }
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    deleteTail() {
        if (!this.head) {
            return;
        }
        let del;
        if (!this.head.next) {
            del = this.head.next;
            this.head = null;
            this.tail = null;
            return del;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        del = this.tail;
        currentNode.next = null;
        this.tail = currentNode;
        return del;
    }
}


class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


export {
    LinkedList,
    ListNode
};
