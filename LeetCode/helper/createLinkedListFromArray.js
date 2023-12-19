class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      val: value,
      next: null
    },
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.val)
      currentNode = currentNode.next
    }
    console.log( array )
  }

  insert(index, value) {
    //check inputs    
    if(index === 0) {
      this.prepend(value)
      return this.printList()
    }
    if(index >= this.length) {
      this.append(value)
      return this.printList()
    }
    const newNode = new Node(value)

    const leader = this.traverseToIndex(index - 1) 
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      return console.log("index does not exist")
    }
    if(index === 0) {
      this.head = this.head.next
      this.length--
      return this.printList()
    }

    const leader = this.traverseToIndex(index - 1)
    const nodeAtIndex = leader.next
    const nextNode = nodeAtIndex.next
    leader.next = nextNode
    if(index === this.length - 1) {      
      this.tail = leader
    }
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }  
}

const createList = function(array) {
  const list = new LinkedList(array[0])
  for(let i = 1; i < array.length; i++) {
    list.append(array[i])
  }
  return list
}

const listy = createList([1,2,3,4,5])

console.log(listy.head)

module.exports = { createList }