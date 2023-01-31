

// FUCKING POINTLESS LEETCODE PROBLEM

class MyStack {
  constructor() {
    this.enqueueList = new LinkedList()
    this.dequeueList = new LinkedList()
  }

  push(x) {
    if(this.enqueueList.head === null && this.dequeueList.head === null) {
      return this.enqueueList.enqueue(x)
    }
    if(this.enqueueList.length === 0) {
      this.enqueueList = reverseList(this.dequeueList)
      this.dequeueList = new LinkedList()
    }
    this.enqueueList.enqueue(x)
    return this.enqueueList
  }

  pop() {
    if(this.dequeueList.length === 0) {
      this.dequeueList = reverseList(this.enqueueList)
      this.enqueueList = new LinkedList()
    }
    return this.dequeueList.dequeue()
  }

  top() {
    if(this.enqueueList.length === 0) return this.dequeueList.head.val
    else return this.enqueueList.tail.val
  }

  empty() {
    if(this.enqueueList.length === 0 && this.dequeueList.length === 0) return true
    else return false
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(val) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = this.head
      this.length++
    } else {
      this.tail.next = node
      this.tail = this.tail.next
      this.length++
    }
    return this
  }

  dequeue() {
    if(!this.head) return null
    let dequeued = this.head.val
    if(!this.head.next) {
      this.head = null
      this.tail = null
      this.length--
    } else {
      this.head = this.head.next
      this.length--
    }
    return dequeued
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function reverseList(list) {
  let prev = list.head
  list.tail = list.head
  let current = list.head.next
  while(current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  list.head.next = null
  list.head = prev
  return list
}

const stacky = new MyStack()
c({push: stacky.push(1)})
c({push: stacky.push(2)})
c({push: stacky.push(3)})
c({push: stacky.push(4)})
c({push: stacky.push(5)})
c({push: stacky.push(6)})
c({top: stacky.top()})
c({pop: stacky.pop()})
c({top: stacky.top()})
c({pop: stacky.pop()})
c({pop: stacky.pop()})
c({pop: stacky.pop()})
c({pop: stacky.pop()})
c({empty: stacky.empty()})

// stacky.pop()
