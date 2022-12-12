// Very basic linked list in JS
// 10 --> 5 --> 16

// const myLinkedList = {
//   head: {
//     value: '',
//     next: {} // this empty object points to another node
//   }
// }

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     } 
//   }
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
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
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log( array )
  }

  // insert(index, value) {
  //   // check inputs    
  //   if(index === 0) {
  //     this.prepend(value)
  //     return this
  //   }
  //   if(index >= this.length) {
  //     this.append(value)
  //     return this
  //   }
  //   const newNode = new Node(value)

  //   let currentNode = this.head.next
  //   let prevNode = this.head

  //   for(let i = 1; i < this.length - 1; i++) {
  //     if(i === index) {
  //       prevNode.next = newNode
  //       newNode.next = currentNode
  //       this.length++
  //     }
  //     prevNode = currentNode
  //     currentNode = currentNode.next      
  //   }
  // } THIS CODE WORKED BUT ISN'T AS CLEAN

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

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.insert(0, 13)
myLinkedList.remove(3)
myLinkedList.remove(5)
myLinkedList.remove(0)
console.log(myLinkedList.length)
