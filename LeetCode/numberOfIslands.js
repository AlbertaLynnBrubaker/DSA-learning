const grid0 = [
  ["0","0","1","1","0"],
  ["0","1","1","1","0"],
  ["0","1","0","0","0"],
  ["0","0","0","0","1"]
]

const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

const grid3 = [
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"]
]

var numIslands = function(grid) {
  let islands = 0
  let r = 0
  let c = 0  
  
  while(true) {
    if(grid[r][c] === "1") {
      traverseIslands(grid, r, c)
      islands++
    }
    if(c < grid[r].length - 1){
      c++
    } else if(c === grid[r].length - 1 && r < grid.length - 1) {
      c = 0
      r++
    } else {
      return islands
    }    
  }
};

const traverseIslands = function(grid, r, c) {
  if(
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[r].length ||
    grid[r][c] !== "1"
  ) {
    return
  }
  
  grid[r][c] = "0"
  traverseIslands(grid, r - 1, c)
  traverseIslands(grid, r + 1, c)
  traverseIslands(grid, r, c - 1)
  traverseIslands(grid, r, c + 1)
  return grid
}

console.log(numIslands(grid2))
