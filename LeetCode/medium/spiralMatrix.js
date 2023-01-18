
const m1 = [[1,2,3],[4,5,6],[7,8,9]]
const m2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const m0 = [[]]
const m3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
const m4 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]

var spiralOrder = function(matrix) {
  if(matrix.length === 0 || matrix[0].length === 0) return []
  const res = []  
  let i = 0
  let j = 0
  let counter = 0
  let movesHor = matrix[0].length - 1
  let movesVer = matrix.length - 1
  let right = true
  let down = true
  
  while(true) {
    let current = matrix[i][j]
    res.push(current)
    if(res.length === matrix.length * matrix[0].length) return res
    if(right && movesHor > 0) {
      j++
      movesHor--
      continue
    } else if (right) {
      right = false
      movesHor = (matrix[0].length - 1) - counter
      counter++
    }
    
    if(down && movesVer > 0) {
      i++
      movesVer--
      continue
    } else if (down) {
      down = false
      movesVer = (matrix.length - 1) - counter
    }    
    if(movesHor > 0) {
      j--
      movesHor--
      continue
    } 
    if(movesVer > 0) {
      i--
      movesVer--
      continue
    } else if(!down) {
      right = true
      down = true
      j++
      counter++
      movesHor = (matrix[0].length - 1) - counter
      movesVer = (matrix.length - 1) - counter
    }
  }
};
c({res: spiralOrder(m4)})


// We basically start by moving right until we hit a boundary, then we move down until we hit a boundary.

