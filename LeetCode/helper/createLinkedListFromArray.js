class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  insert(val) {
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

  remove() {
    if(!this.head) return null
    if(!this.head.next) {
      this.head = null
      this.tail = null
      this.length--
    } else {
      this.head = this.head.next
      this.length--
    }
    return this
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const createList = function(array) {
  const list = new LinkedList()
  for(ele of array) {
    list.insert(ele)
  }
  return list
}

module.exports = { createList }