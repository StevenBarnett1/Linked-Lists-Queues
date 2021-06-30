const { SinglyLinkedNode } = require("./01-singly-linked-list");

const {DoublyLinkedNode} = require("./02-doubly-linked-list")
class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        this.addToTail(val)
        return this.length
    }

    dequeue() {
        if(!this.length) return null
        return this.removeFromHead()
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        }

        else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }

    removeFromHead() {
        if(!this.head)return undefined

        let node = this.head
        if(this.length===1){
            this.head = null
            this.tail = null
        }
        else this.head = this.head.next

        this.length--
        return node.value
    }

}

// let makeQueue = () => {
//     let array = []
//     array.push(1)
//     while(array.length){

//     }
// }
module.exports = {
    Queue,
    SinglyLinkedNode
}
