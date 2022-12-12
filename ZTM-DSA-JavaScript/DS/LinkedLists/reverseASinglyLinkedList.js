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

  // MY SOLUTION
  // reverse() {
  //   if(this.head === this.tail) {
  //     return this.printList()
  //   }
    
  //   let counter = 0
  //   const array = []
  //   let currentNode = this.head
    
  //   while(counter < this.length - 1 ) {
  //     array.push(currentNode.value)
  //     currentNode = currentNode.next
  //     counter++
  //   }

  //   const reverseLinkedList = new LinkedList(this.tail.value)

  //   counter = array.length - 1
  //   while(counter >= 0) {
  //     reverseLinkedList.append(array[counter])
  //     counter--
  //   }

  //   console.log(reverseLinkedList)
  //   return reverseLinkedList.printList()
  // }

  reverse() {
    if(!this.head.next) {
      return this.head
    } // returning a LinkedList of one item
    let first = this.head // setting our first to the head
    this.tail = this.head // resetting our tail to the head
    let second = first.next // setting our second to the this.head.next
    while(second) { // running as long as we still have a second
      const temp = second.next // setting our temp value (at first iteration it is third)
      second.next = first // NOW rather than have second.next point to our third node, it will point back to the first one
      first = second 
      second = temp // THEN we set first to replace second and our second to replace temp and rerun the while loop
    }
    // so on iteration ONE first = the node at index 0, second = node at index 1 and temp = node at index 2. We set temp.next to the node at index 1. We set second.next to the node at index 0. Then we set first to the node at index 1 and second to the node at index 2.
    // on iteration TWO first = index 1, second = index 2, and our new temp is the node at index 2. We set the temp.next to the node at index 2 and we set the second.next to the node at index 1. Then we reset first and second to index 2 and 3.
    // on iteration THREE first = index 2, second = index 3. second.next is null at this point so temp = null on this pass. second.next is set to first at index 2. Then we set second equal to temp.
    // The while loop breaks here because second = temp = null.
    this.head.next = null  // we set our original head.next to null (since it is now our tail)  
    this.head = first // then we set this.head to first, since second is null, first is the last index from the original list (our old tail)
    return this.printList()
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.reverse()