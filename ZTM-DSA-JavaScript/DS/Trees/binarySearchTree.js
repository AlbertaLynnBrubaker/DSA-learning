class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// MY SOLUTION
// class BinarySearchTree {
//   constructor() {
//     this.root = null
//   }

//   insert(value) {
//     // check inputs
//     if(parseInt(value) !== value) {
//       return null
//     }    

//     if(this.root === null) {
//       this.root = new Node(value)
//       return this.root
//     } else {
//       const traverseInsert = function(node) {        
//         if(value < node.value) {
//           if(node.left === null) {
//             node.left = new Node(value)
//             return node.left
//           } else {
//             traverseInsert(node.left)
//           }
//         } else {
//           if(node.right === null) {
//             node.right = new Node(value)
//             return node.right
//           } else {
//             traverseInsert(node.right)
//           }
//         }
//         return node
//       }
//       traverseInsert(this.root)
//     }    
//   }

//   lookup(value) {
//     // check inputs
//     if(parseInt(value) !== value) {
//       return null
//     }

//     let currentNode = this.root
//     while(currentNode.value !== value) {      
//       if(value < currentNode.value ) {
//         currentNode = currentNode.left
//       } else {
//         currentNode = currentNode.right
//       }
//       if(currentNode === null) {
//         return null
//       }
//     }
//     return currentNode
//   }

  // lookup2(value) {
  //   let currentNode = this.root

  //   if(currentNode === null) {
  //     return null
  //   }
  //   while(currentNode.value !== value) {
  //     if(value < currentNode.value) {
  //       if(currentNode.left === null) {
  //         return null
  //       }
  //       currentNode = currentNode.left
  //     } else {
  //       if(currentNode.right === null) {
  //         return null
  //       }
  //       currentNode = currentNode.right
  //     }
  //   }
  //   return currentNode
  // }
// }

// ANDREI'S SOLUTION
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if(this.root === null) {
      this.root = newNode
      return newNode
    } else {
      let currentNode = this.root
      while(true) {
        if(value < currentNode.value) {
          //Left
          if(!currentNode.left) {
            currentNode.left = newNode
            return currentNode.left
          }
          currentNode = currentNode.left
        } else {
          //Right
          if(!currentNode.right) {
            currentNode.right = newNode
            return currentNode.right
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(value) {
    if(!this.root) {
      return false
    }
    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else if(currentNode.value === value) {
        return currentNode
      }
    }
    return false
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(6))
console.log(tree.lookup(71))
console.log(tree.lookup(15))


//      9
//   4     20
// 1  6  15  170

function traverse(node) {
  const tree = {value: node.value}
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree  
}


