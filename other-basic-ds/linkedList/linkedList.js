class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode
    this.length++
  }

  getByIndex(index) {
    if(index < 0 || index >= this.length) return null

    let current = this.head
    for(let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  print() {
    let output = ''
    let current = this.head
    while(current) {
      output = `${output}${current.value} -> `
      current = current.next
    }
    console.log(`${output}`)
  }

  insertAtIndex(index, value) {
    if(index === 0) return this.insertAtHead(value)

    const previous = this.getByIndex(index - 1)
    if(previous === null) return null

    previous.next = new LinkedListNode(value, previous.next)
    this.length++
  }

  removeHead() {
    this.head = this.head.next
    this.length--
  }

  removeAtIndex(index) {
    if(index === 0) return this.removeHead()

    const previous = this.getByIndex(index - 1)
    if(previous === null) return null

    previous.next = previous.next.next
    this.length--
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

LinkedList.fromValues = function(...values) {
  const ll = new LinkedList()
  for(let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i])
  }
  return ll
}

module.exports = LinkedList

// the Big O is O(1) for inserting a new node into the list, which is one of the advantages of a Linked List over an Array, where the Big O of .unshift() is O(n) because it has to loop through the array to reassign the index of each element.