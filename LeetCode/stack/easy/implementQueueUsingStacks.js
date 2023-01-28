

class MyQueue {
  constructor() {
    this.firstToLast = []
    this.lastToFirst = []
    this.size = 0
  }

  push(x) {
    this.firstToLast.push(x)
    this.size++
    return this.firstToLast
  }

  pop() {
    if(!this.lastToFirst.length) {
      while(this.firstToLast.length) {
        this.lastToFirst.push(this.firstToLast.pop())
      }
    }
    this.size--
    return this.lastToFirst.pop()
  }

  peek() {
    if(!this.lastToFirst.length) {
      while(this.firstToLast.length) {
        this.lastToFirst.push(this.firstToLast.pop())
      }
    }

    return this.lastToFirst[this.lastToFirst.length - 1]
  }

  empty() {
    return this.size === 0
  }
}

const myQueue = new MyQueue()
c({push1: myQueue.push(1)})
c({push2: myQueue.push(2)})
c({push1: myQueue.push(3)})
c({push2: myQueue.push(4)})
c({pop: myQueue.pop()})
c({push2: myQueue.push(5)})
c({pop: myQueue.pop()})
c({pop: myQueue.pop()})
c({pop: myQueue.pop()})

// var MyQueue = function() {
//   const queue = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
    
// };