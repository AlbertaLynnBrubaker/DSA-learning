// function isValidBST(root){
//   return isValid(-Infinity, root, Infinity);
// }

// function isValid(left, root, right){
//   if(root == null) return true;
//   if(!(root.val > left && root.val < right)) return false;

//   return isValid(left, root.left, root.val) && isValid(root.val, root.right, right);
// }

// var isValidBST = function(root) {
//   const nodeObj = {currentNode: root, lowerLimit: (-2)**(31), upperLimit: (2**31) - 1}
//   return validateSubtree([nodeObj])
// }

// const validateSubtree = function(queue = []) {
//   if(queue.length === 0) return true

//   // destructure nodeObj
//   const {currentNode, lowerLimit, upperLimit} = queue.shift()
  
//   if(currentNode.val <= lowerLimit || currentNode.val >= upperLimit) {
//     return false
//   }

//   if(currentNode.left) queue.push({currentNode: currentNode.left, lowerLimit, upperLimit: currentNode.val})
//   if(currentNode.right) queue.push({currentNode: currentNode.right, lowerLimit: currentNode.val, upperLimit})


//   return validateSubtree(queue)
// }

var isValidBST = function(root) {
  const nodeObj = {currentNode: root, lowerLimit: -Infinity, upperLimit: Infinity}
  const queue = [nodeObj]
  
  while(queue.length) {
    const { currentNode, lowerLimit, upperLimit } = queue.shift()
  
  
    if(currentNode.val <= lowerLimit || currentNode.val >= upperLimit) {
      return false
    }

    if(currentNode.left) queue.push({currentNode: currentNode.left, lowerLimit, upperLimit: currentNode.val})
    if(currentNode.right) queue.push({currentNode: currentNode.right, lowerLimit: currentNode.val, upperLimit})

  }

  return true
}



const BST1 = {val: 2, left: {val: 1, left: null, right: null}, right: {val: 3, left: null, right: null}}

const BST2 = {val: 5, left: {val: 1, left: null, right: null}, right: {val: 4, left: {val: 3, left: null, right: null}, right: {val: 6, left: null, right: null}}}

console.log(isValidBST(BST2))