const cost1 = [10, 15, 20]
const cost2 = [1,100,1,1,1,100,1,1,100,1]

// var minCostClimbingStairs = function(cost) {
//   let n = cost.length
//   for(let i = 2; i < n; i++) {
//     cost[i] = Math.min(cost[i - 1], cost[i-2]) + cost[i]
//   }
//   return Math.min(cost[n - 1], cost[n - 2])
// };


// we can start at index 0 OR index 1
// we can take a step of +1 index or we can take a step of +2 index
// the top is not the last index but the cost.length
// 

// we need to see if the current index and the next index added together are more or less than the current index plus the index + 2. If the former are less, we take one step, if they are more we take two steps.




// memoized recursion
var minCostClimbingStairs = function(cost) {
  const n = cost.length
  const cache = {}
  
  function recursion(i) {
    // break case at either index of 0 or 1
    if (i < 2) return cost[i]
    
    if (i in cache) return cache[i]
    else cache[i] = cost[i] + Math.min(recursion(i - 1), recursion(i - 2))
    
    return cache[i]
  }
  
  return Math.min(recursion(n - 1), recursion(n - 2))
};

c({minCostClimbingStairs: minCostClimbingStairs(cost1)})

// confusing but space optimized bottom up approach. Store each iterations added value at each stage and compare them to determine the next stage of iterations.
// var minCostClimbingStairs = function(cost) {
//   const n = cost.length
//   let [d1, d2, t] = [cost[0], cost[1], null]

//   for (let i = 2; i < cost.length; i++) {
//       t = d2
//       d2 = cost[i] + Math.min(d1, d2)
//       d1 = t
//   }

//   return Math.min(d1, d2)
// };

