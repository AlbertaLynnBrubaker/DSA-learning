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

  // remove(value) {    
  //   const removeNode = (node, value) => {
  //     if(node === null) {
  //       return null
  //     }
  //     if(node.value === value) {
  //       // no children
  //       if(node.left === null && node.right === null) {
  //         return null
  //       // one child to right
  //       } else if(node.left === null) {
  //         return node.right
  //       // one child to left
  //       } else if(node.right === null) {
  //         return node.left
  //       }

  //       // two children (leftmost grandchild through right child)
  //       let leftmostGrandchild = node.right
  //       while(leftmostGrandchild.left !== null) {
  //         leftmostGrandchild = leftmostGrandchild.left
  //       }
  //       node.value = leftmostGrandchild.value
  //       // recursively remove the leftGC from lower in the tree
  //       node.right = removeNode(node.right, leftmostGrandchild.value)
  //       return node
  //     } else if(value < node.value) {
  //       node.left = removeNode(node.left, value)
  //       return node
  //     } else {
  //       node.right = removeNode(node.right, value)
  //       return node
  //     }
  //   }
  // this.root = removeNode(this.root, value)
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

  remove(value) {
    if(!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if(value === currentNode.value) {

        //Option 1: No right child
        if(currentNode.right === null) {
          if(parentNode === null) {
            this.root = currentNode.left
          } else {
            // if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left
            } 
            // if parent < current value, make left child a right child of parent
            else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }
        } 
        //Option 2: Right child which doesn't have a left child
        else if(currentNode.right.left === null) {
          currentNode.right.left = currentNode.left

          if(parentNode === null) {
            this.root = currentNode.left
          } else {            

            // if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right
            }

            // if parent > current, make right child a right child of parent
            else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }
        }
        //Option 3: Right child that has a left child
        else {
          // find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while(leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if(parentNode === null) {
            this.root = leftmost
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
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
tree.insert(21)
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(6))
// console.log(tree.lookup(71))
// console.log(tree.lookup(15))
tree.remove(20)
// console.log(JSON.stringify(traverse(tree.root)))




//      9
//   4     20
// 1  6  15  170

function traverse(node) {
  const tree = {value: node.value}
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree  
}


module.exports = { BinarySearchTree, Node }

