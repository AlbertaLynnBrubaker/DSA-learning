const { c } = require('../helper/consoleLogHelper')

var diameterOfBinaryTree = function(root) {
  let diameter = 0
  
  const findDiameter = function(node) {
    if(!node) return 0
    
    const leftSubtree = findDiameter(node.left)
    const rightSubtree = findDiameter(node.right)
    
    diameter = Math.max(diameter, leftSubtree + rightSubtree)
    
    return 1 + Math.max(leftSubtree, rightSubtree)
  }
  findDiameter(root)
  return diameter
};