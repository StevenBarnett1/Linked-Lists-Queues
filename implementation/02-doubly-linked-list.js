// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let node = new DoublyLinkedNode(val)

        if(!this.tail){
            this.tail = node
            this.head = node
        }
        else {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        }
        this.length++
        return this
    }

    removeFromHead() {
       if(!this.head)return undefined
        let res = this.head.value

       if(this.head === this.tail){
           this.head = null
           this.tail = null
       }
       else {
       this.head = this.head.next
       this.head.prev = null
       }
       this.length--
       return res

    }

    removeFromTail() {
        if(!this.head)return undefined

        let res = this.tail.value

       if(this.head === this.tail){
           this.head = null
           this.tail = null
       }
       else {
       this.tail = this.tail.prev
       this.tail.next = null
       }
       this.length--
       return res

    }

    peekAtHead() {
        if(this.head)return this.head.value
    }

    peekAtTail() {
        return this.tail ? this.tail.value : undefined
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
