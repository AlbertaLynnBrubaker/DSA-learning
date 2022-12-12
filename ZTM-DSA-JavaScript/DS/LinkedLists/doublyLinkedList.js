class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value),
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    const leader = this.tail

    leader.next = newNode
    this.tail = newNode
    newNode.prev = leader
    this.length++
    return this.printList()
  }

  prepend(value) {
    const newNode = new Node(value)

    const follower = this.head

    newNode.next = follower
    this.head = newNode
    follower.prev = newNode
    this.length++
    return this.printList()
  }

  printList() {
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
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
    const follower = leader.next
    leader.next = newNode
    newNode.next = follower
    follower.prev = newNode
    newNode.prev = leader
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
    const follower = nodeAtIndex.next
    leader.next = follower
    follower.prev = leader
    if(index === this.length - 1) {      
      this.tail = leader
    }
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    if(Math.floor(this.length/2) > index) {
      let counter = 0
      let currentNode = this.head
      while (counter !== index) {
        currentNode = currentNode.next
        counter++
      }      
      return currentNode
    } else {
      let counter = this.length - 1
      let currentNode = this.tail
      while (counter !== index) {
        currentNode = currentNode.prev
        counter--
      }      
      return currentNode
    }
  }  
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 25)
myLinkedList.insert(4, 33)
console.log(myLinkedList.length)
myLinkedList.remove(4)
console.log(myLinkedList.length)