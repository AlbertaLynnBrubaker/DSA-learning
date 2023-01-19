

var isBalanced = function(root) {
  if(!root) return true
    
  if(findHeight(root) === -1) return false
  return true
}

function findHeight(root) {
  if(!root) return 0

  let left = findHeight(root.left)
  let right = findHeight(root.right)
  if(left === -1 || right === -1) return -1
  if(Math.abs(left - right) > 1 ) return - 1
  return Math.max(left, right) + 1
}


// var isBalanced = function(root) {
//   return (findMin(root) >= findMax(root) - 1)
// };

// function findMax(root) {
//   if(!root) return -1

//   let left = findMax(root.left)
//   let right = findMax(root.right)
//   if(left > right) return left + 1
//   else return right + 1  
// }

// function findMin(root) {
//   if(!root) return -1

//   let left = findMin(root.left)
//   let right = findMin(root.right)
//   if(left < right) return left + 1
//   else return right + 1  
// }