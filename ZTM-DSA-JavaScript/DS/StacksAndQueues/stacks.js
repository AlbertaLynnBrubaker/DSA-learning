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

const myStack = new Stack()
myStack.push("google")
myStack.push("discord")
myStack.push("twitter")
console.log(myStack)
myStack.pop()
console.log(myStack)