const { c } = require('./helper/consoleLogHelper')

// the robot starts at the top right corner grid[0][0] and has to end at the bottom right corner grid[m-1][n-1]
// the robot can only move right or down


// Math solution // time O(m+n) space O(1)
// the grid is m x n (m rows by n columns) so we know the robot has to move down m - 1 times and right n - 1 added together (n + m - 2). if we remove the possibility of duplicate steps in each direction (m-1)! and (n-1)!

// (n + m - 2)! / (m - 1)! * (n - 1)! 

var uniquePaths = function(m, n) {
  // non memo recursion (blech!) big huge big O
  // const factorial = function(v) {
  //   // break case
  //   if(v === 1) return 1

  //   return v * factorial(v - 1)
  // }

  let cache = {}
  // we know that v >= 0 since the robot can't take negative steps so our break can use v < 2
  const factorial = function(v) {
    if(v in cache) return cache[v]
    else {
      if(v < 2) return 1
      else cache[v] = v * factorial(v - 1)
  
      return cache[v]
    }
  }

  // iterative factorial

  // const factorial = function(value) {
  //   let result = 1
  //   while(value > 1) {
  //     result = result * value
  //     value--
  //   }
  //   return result
  // }

  return (factorial(m + n - 2))/((factorial(m - 1)) * factorial(n - 1))
};

c({paths: uniquePaths(3, 3)})

// Iterative approach // time O(m*n) space O(m*n)

// function uniquePaths(m, n) {
//   if (m === 1 || n === 1) return 1; // edge case
//   const grid = Array(m).fill(Array(n).fill(1));
//   for (let row = 1; row < m; row++) {
//     for (let col = 1; col < n; col++) {
//       grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
//     }
//   }
//   return grid[m - 1][n - 1];
// }