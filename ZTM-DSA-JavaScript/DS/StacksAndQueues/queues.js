// Queue as a Linked List
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if(!this.first) {
      this.first = newNode    
      this.last = newNode        
    } else {
      this.last.next = newNode
      this.last = newNode      
    }   
    this.length++
    return this
  }

  dequeue() {
    if(!this.first) {
      return null
    }
    if(this.first === this.last) {
      this.last = null
    }
    const tempPointer = this.first
    this.first = this.first.next
    this.length--
    return tempPointer
  }

  isEmpty() {
    if(!this.first) {
      return true
    }
    return false
  }
}

// const myQueue = new Queue()
// myQueue.enqueue("Joy")
// myQueue.enqueue("Matt")
// myQueue.enqueue("Pavel")
// myQueue.enqueue("Samir")
// console.log(myQueue)
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue)


class ArrayQueue {
  constructor() {
    this.array = []
    this.length = 0
  }

  peek() {
    return this.array[this.length - 1]
  }

  enqueue(element) {
    this.array.push(element)
    this.length++
    return this
  }

  dequeue() {
    const unwantedElement = this.array[0]
    this.array.shift()
    this.length--
    return unwantedElement
  }

  isEmpty() {
    if(this.length === 0) {
      return true
    }
    return false
  }
}

const queuey = new ArrayQueue()
queuey.enqueue(1)
queuey.enqueue(2)
console.log(queuey)

queuey.dequeue()
console.log(queuey)