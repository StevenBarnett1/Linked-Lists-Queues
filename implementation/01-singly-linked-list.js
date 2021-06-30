// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val)
        this.length++
        if(!this.head){
            this.head = node
            return this
        }

        node.next = this.head
        this.head = node
        return this
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++
        if (!this.head) {
            this.head = newNode;
            return this
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this

    }

    removeFromHead() {
        if(!this.head)return undefined

        let node = this.head

        this.length === 1 ? this.head = null : this.head = this.head.next

        this.length--
        return node
    }

    removeFromTail() {
        if(!this.head)return undefined

        let curr = this.head

        if(this.length === 1)this.head = null
        else{
        while(curr.next.next){
            curr = curr.next
        }
    }
        let res = curr.next
        curr.next = null
        this.length--

        return res
    }

    peekAtHead() {
        return !this.length ? undefined : this.head.value
    }

    print() {
        if(!this.head)return
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
        console.log("NULL")
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
