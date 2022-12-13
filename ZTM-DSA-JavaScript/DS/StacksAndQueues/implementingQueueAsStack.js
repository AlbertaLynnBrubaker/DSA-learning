class Queue {
  constructor() {
    this.lastToFirst = []
    this.firstToLast = []
  }

  peek() {
    if (this.firstToLast.length > 0) {
      return this.firstToLast[0];
    }
    return this.lastToFirst[this.lastToFirst.length - 1];
  
  }

  enqueue(value) {
    const length = this.lastToFirst.length
    for(let i = 0; i < length; i++) {
      this.firstToLast.push(this.lastToFirst.pop())
    }
    this.firstToLast.push(value)
    return this
  }

  dequeue() {
    const length = this.firstToLast.length;
    for (let i = 0; i < length; i++) {
      this.lastToFirst.push(this.firstToLast.pop());
    }
    this.lastToFirst.pop();
    return this;
  }

  isEmpty() {
    if(this.lastToFirst.length === 0) {
      return true
    }
    return false
  }
}

const myQueue = new Queue()
myQueue.enqueue(1)
console.log(myQueue.enqueue(2))
myQueue.enqueue(3)
console.log(myQueue.enqueue(4))
myQueue.enqueue(5)
console.log(myQueue.enqueue(6))
console.log(myQueue.dequeue())
console.log(myQueue.enqueue(6))
console.log(myQueue.dequeue())