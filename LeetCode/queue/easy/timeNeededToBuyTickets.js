

// Best solution LeetCode
// var timeRequiredToBuy = function(tickets, k) {
//   let n = tickets.length;
//   let queue = [];
//   for(let i = 0; i < n; i++){
//       queue.push(tickets[i]);
//   }
//   let i = 0;
//   let count = 0;
//   while(queue[k] !== 0){
//       if(queue[i%n] !== 0){
//           queue[i%n]--;
//           count++;
//       }
//       i++;
//   }
//   return count;
// };

var timeRequiredToBuy = function(tickets, k) {
  let time = 0
  const queue = new LinkedList()

  for(let i = 0; i < tickets.length; i++) {
    queue.enqueue(i, tickets[i])
  }

  while (true) {
    let current = queue.head
    current.tickets--
    time++
    if(current.person === k && current.tickets === 0) return time
    else queue.moveToBack(current)
  }
};

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(index, tickets) {
    const person = new Node(index, tickets)
    if(!this.head) {
      this.head = person
      this.tail = this.head
      this.length++
    } else {
      this.tail.next = person
      this.tail = this.tail.next
      this.length++
    }
    return this
  }

  dequeue() {
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

  moveToBack(node) {
    if(node.tickets === 0) {
      this.dequeue()
      return this
    }
    if(!this.head.next) return this 
    else {
      this.head = this.head.next
      this.tail.next = node
      this.tail = this.tail.next
      this.tail.next = null
    }
    return this
  }
}

class Node {
  constructor(person,tickets) {
    this.person = person
    this.tickets = tickets
    this.next = null
  }
}

c({res: timeRequiredToBuy([5,1,1,1], 0)})

// const testLL = new LinkedList()
// testLL.enqueue(0, 1)
// testLL.enqueue(1, 1)
// testLL.enqueue(2, 1)
// testLL.enqueue(3, 1)
// testLL.enqueue(4, 1)
// testLL.enqueue(5, 1)
// testLL.head.tickets = 0
// c({testLL})
// testLL.moveToBack(testLL.head)
// c({testLL})



