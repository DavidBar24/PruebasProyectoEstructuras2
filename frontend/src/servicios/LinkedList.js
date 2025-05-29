// LinkedList.js nombre del archivo

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if (current) {
            previous.next = current.next;
            this.length--;
        }
    }

    print() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    size() {
        return this.length;
    }

    peek() {
        return this.head ? this.head.data : null;
    }
}

export default LinkedList;
