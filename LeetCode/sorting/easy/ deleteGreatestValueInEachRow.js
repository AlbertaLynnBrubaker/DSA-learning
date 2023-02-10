const { c } = require('../../helper/consoleLogHelper')

const grid1 =[[10]]

var deleteGreatestValue = function(grid) {
  let acc = []
  let sum = 0
  for(let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].sort((a, b) => a - b)
  }

  while(grid[0].length) {
    for(let n of grid) {
      acc.push(n.pop())
    }
    c({acc})
    sum += Math.max(...acc)
    acc = []
  }

  return sum
};

c({res: deleteGreatestValue(grid1)})