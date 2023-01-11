const { c } = require('../helper/consoleLogHelper')

var lastStoneWeight = function(stones) {
  const queue = []

  const enqueue = (stone) => {
    if(!queue.length) return queue.push(stone)
    let idx = 0
    while(true) {
      if(stone > queue[idx]) idx++
      else return queue.splice(idx, 0, stone)
    }
  }

  stones.forEach(stone => {
    enqueue(stone)
  })

  while(queue.length > 1) {
    let first = queue.pop()
    let second = queue.pop()
    if(first > second) {
      first = first - second
      enqueue(first)
    }
  }

  return queue[0] ? queue[0] : 0
};


c({q: lastStoneWeight([2,7,4,1,8,1])})
