

class RecentCounter {
  constructor() {
    this.requests = {
      head: null,
      tail: null,
      length: 0
    }
    this.range = []
  }

  ping(time) {
    const newTime = {
      time: time,
      next: null
    }
    if(!this.requests.length) {
      this.requests.head = newTime
      this.requests.tail = newTime
      this.requests.length++
    } else {
      this.requests.tail.next = newTime
      this.requests.tail = this.requests.tail.next
      this.requests.length++
    }
    this.range = [time - 3000, time]
    while(this.requests.head.time < this.range[0]) {
      this.requests.head = this.requests.head.next
      this.requests.length--
    }
    return this.requests.length
  }
}

const rC = new RecentCounter()

c({res: rC.ping(1)})
c({res: rC.ping(100)})
c({res: rC.ping(201)})
c({res: rC.ping(3300)})
// var RecentCounter = function() {
    
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
    
// };