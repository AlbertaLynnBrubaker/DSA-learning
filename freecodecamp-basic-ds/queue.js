// a Queue is very much like a Stack, except a Stack is first in, last out and a Queue is first in, first out (like a line at ticket booth)

function Queue () {
  const collection = []

  // this method will print the collection to the console
  this.print = function() {
    console.log(collection)
  }

  // this method will add an element to the end of the Queue
  this.enqueue = function(element) {
    collection.push(element)
  }

  // this method will remove and element from the front of the Queue
  this.dequeue = function(element) {
    return collection.shift()
  }

  // this method will return the element at the front of the Queue
  this.front = function() {
    return collection[0]
  }

  // this method will return the length of the Queue
  this.size = function() {
    return collection.length
  }

  // this method will tell us if the Queue is empty or not
  this.isEmpty = function() {
    return (collection.length === 0)
  }
}

// const q = new Queue()
// q.enqueue('a')
// q.enqueue('b')
// q.enqueue('c')
// q.print()
// q.dequeue()
// console.log(q.front())
// q.print()

// a PriorityQueue allows us to put a priority number on an element as we add it, determining the place in the Queue that element will go

function PriorityQueue() {
  const collection = []

  this.printCollection = function() {
    console.log(collection)
  }

  this.enqueue = function(element) {
    if(this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for(let i = 0; i < collection.length; i++) {
        if(element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function() {
    let value = collection.shift()
    return value[0]
  }

  this.front = function() {
    return collection[0]
  }

  this.size = function() {
    return collection.length
  }

  this.isEmpty = function() {
    return (collection.length === 0)
  }
}

const pq = new PriorityQueue()
pq.enqueue(['Alie B', 2])
pq.enqueue(['Andi R', 3])
pq.enqueue(['Sam R', 1])
pq.printCollection()
pq.dequeue()
console.log(pq.front())
pq.printCollection()
