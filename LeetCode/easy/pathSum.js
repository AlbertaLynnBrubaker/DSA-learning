const { c } = require('../helper/consoleLogHelper')

var hasPathSum = function(root, targetSum) {
  if(!root) return false

  if(!root.left && !root.right) return root.val === targetSum

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

// var pathSum = function(root, targetSum) {
//   if(!root) return 0
//   let count = 0
//   let map = {}
  
//   const dfs = function(node, sum) {
//     if(!node) return null
    
//     sum += node.val
    
//     if(sum === targetSum) count++
    
//     if(map[sum - targetSum]) count += map[sum - targetSum]
    
//     if(map[sum]) map[sum]++
//     else map[sum] = 1
    
//     if(node.left) dfs(node.left, sum)
//     if(node.right) dfs(node.right, sum)
    
//     map[sum]--
//   }
  
//   dfs(root, 0)
//   return count
// };