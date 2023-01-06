const { c } = require('./helper/consoleLogHelper')

// var climbStairs = function(n) {
//   n = n + 1
//   const array = [0, 1]

//   for(let i = 2; i <= n; i++) {
//     array.push (array[i - 1] + array[i - 2])
//   }

//   return array[n]
// };

const cache = {1: 1, 2: 2}
const climbStairs = (n) => {
  if(!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return cache[n]
}


c({climbStairs: climbStairs(6)})


// 1 = 1, 2 = 2, 3 = 3, 4 = 5, 5 = 8, 6 = 13

// 4: 1 + 1 + 1 + 1 or 2 + 1 + 1 or 2 + 2 or 1 + 2 + 1 or 1 + 1 + 2

// 5: 1 + 1 + 1 + 1 + 1 or 2 + 1 + 1 + 1 or 2 + 2 + 1 or 2 + 1 + 2 or 1 + 2 + 2 or 1 + 1 + 1 + 2 or 1 + 2 + 1 + 1 or 1 + 1 + 2 + 1

// 6: 1 + 1 + 1 + 1 + 1 + 1 or 2 + 1 + 1 + 1 + 1 or 1 + 2 + 1 + 1 + 1 or 1 + 1 + 2 + 1 + 1 or 1 + 1 + 1 + 2 + 1 or 1 + 1 + 1 + 1 + 2 or 2 + 2 + 1 + 1 or 2 + 1 + 2 + 1 or 2 + 1 + 1 + 2 or 1 + 2 + 2 + 1 or 1 + 2 + 1 + 2 or 1 + 1 + 2 + 2 or 2 + 2 + 2