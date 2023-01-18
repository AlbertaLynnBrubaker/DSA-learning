

const t1 = ["A","A","A","B","B","B"]

var leastInterval = function(tasks, n) {
  if(n === 0) return tasks.length

  let f = 0
  let X = 0
  const map = {}
  
  for(let task of tasks) {
    map[task] = map[task] + 1 || 1
    if(f < map[task]) f = map[task]
  }

  for(let key in map) {
    if(map[key] === f) X++
  }

  return Math.max((f-1)*(n+1) + X, tasks.length)
};

c({res: leastInterval(["A","A","A","B","B","B"], 0)})

// n+1 = number of time slots needed per max task
// f-1 = number of times the above needs to run (the count of the max number of the most frequent task except the last one)
// X = the number of tasks that equal max
// (n+1) * (f-1) + X