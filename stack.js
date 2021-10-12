module.exports = class Stack {
    constructor() {
        this.head = null
        this.top = null
        this.length = 0
    }

    push(value) {
        let nodeToPush = new Node(value)
        if (!this.head) {
            this.head = nodeToPush
            this.top = nodeToPush
        }
        else {
            this.top.next = nodeToPush
            nodeToPush.prev = this.top
            this.top = nodeToPush
        }
        this.length++   
        return this.top
    }

    pop() {
        if (this.length === 0) {
            return false
        }
        else {
            var poped = this.top
            this.top = this.top.prev
            this.top.next = null
        }

        this.length--;
        return poped        
    }

    peek() {
        console.log("Top element of stack: " + this.top.value)
        return this.top;
    }
    
    search(value) {
        if (!this.head) {
            console.log("Stack is currently empty")
        }
        if (this.length === 1) {
            console.log(`found node: ${this.head.value}`)
            return this.head
        }
        else {
            let currentNode = this.head
            while(currentNode) {
                if (currentNode.value === value) {
                    console.log(`found node: ${currentNode.value}`) 
                    return currentNode
                }
                else if (currentNode.next !== null){
                    currentNode = currentNode.next                
                }
                else {
                    console.log("Node was not found")
                    return
                }
            }
        }
    }

    printStack() {
        let currentNode = this.head
        if (currentNode) {        
            while(currentNode) {
                console.log("node value: " + currentNode.value)
                currentNode = currentNode.next
            }
        }
        else {
            console.log("Stack is currently empty")
        }
    }
}

module.exports = class Node {
    constructor(value) {
        this.next = null
        this.prev = null
        this.value = value
    }
}

