
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  let n = matrix[0].length

  let floorIndex = 0
  let ceilingIndex = (m * n) - 1
  
  while(floorIndex <= ceilingIndex) {
    let mid = Math.floor((ceilingIndex + floorIndex)/2)
    let row = Math.floor(mid/n)
    let column = mid % n
    let guess = matrix[row][column]

    if(guess === target) return true
    else if(guess < target) floorIndex = mid + 1
    else ceilingIndex = mid - 1
  }
  return false
};

c({res: searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)})