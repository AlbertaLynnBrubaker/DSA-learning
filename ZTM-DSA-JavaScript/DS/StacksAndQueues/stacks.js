// Stack as a Linked List
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if(!this.bottom) {
      this.bottom = newNode
      this.top = newNode      
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if(!this.bottom) {
      return null
    }
    if(this.top === this.bottom) {
      this.bottom = null
    } 
    const holdingPointer = this.top
    this.top = this.top.next
    
    this.length--
    return holdingPointer
  }

  isEmpty() {
    if(!this.bottom) {
      return true
    }
    return false
  }
}

// const myStack = new Stack()
// myStack.push("google")
// myStack.push("discord")
// myStack.push("twitter")
// console.log(myStack)
// myStack.pop()
// console.log(myStack)

// Stack as an Array

class ArrayStack {
  constructor() {
    this.array = []
    this.length = 0
  }

  peek() {
    return this.array[this.length - 1]
  }

  push(element) {
    this.array.push(element)
    this.length++
    return this
  }

  pop() {
    const unwantedElement = this.array[this.length -1]
    this.array.pop()
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