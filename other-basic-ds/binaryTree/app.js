const {BST, BSTNode} = require('./bst')

// BST.fromValues = function(...values) {
//   const bst = new BST()
//   for(let i = 0; i < values.length; i++) {
//     bst.add(values[i])
//   }
//   return bst
// }

// const bst = BST.fromValues(10, 4, 3, 5, 8, 12, 17, 15)

// console.log(bst.root.right.right)

const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
const node = bst.root.right.right

console.log(node)