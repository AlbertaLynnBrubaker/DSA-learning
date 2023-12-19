const { c } = require('../../helper/consoleLogHelper')

// write a recursive function for traversal passing in the current node and the depth

// track the current traversal depth versus the maximum depth achieved and return max

const traverseTree = function(node, depth) {
    if(!node.left && !node.right) return depth
    let maxDepth = depth
    if(node.left) maxDepth = Math.max(maxDepth, traverseTree(node.left, depth + 1))
    if(node.right) maxDepth = Math.max(maxDepth, traverseTree(node.right, depth + 1))
    return maxDepth
}

var maxDepth = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1
    // traverse left to depth then move up to parent and right
    return traverseTree(root, 1)
};


// Boilerplate DFS
// var maxDepth = function(root) {
//     return dfs(root);

//     function dfs(node) {
//         if(node == null) {
//             return 0;
//         }

//         let left = dfs(node.left);
//         let right = dfs(node.right);

//         return Math.max(left, right) + 1;
//     }
// };

// embarrassingly simple solution
// var maxDepth = function(root) {
//     // base case: root is null
//     if (!(root instanceof TreeNode)) return 0;

//     // recursive case: add in longer of the two branches
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };