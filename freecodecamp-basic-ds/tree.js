// Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // this method will add a data point to the BST
  add(data) {
    // ref to root node
    const node = this.root
    // check to see if node var is empty. If it is, set the root as a new Node containing the data given to add()
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function(node) {

        if(data < node.data) {

          if(node.left === null) {
            node.left = new Node(data)
            return
          } else if(node.left !== null) {
            return searchTree(node.left)
          }

        } else if(data > node.data) {

          if(node.right === null) {
            node.right = new Node(data)
            return
          } else if(node.right !== null) {
            return searchTree(node.right)
          }

        } else {

          return null

        }
      }
      return searchTree(node)
    }
  }

  // this method will find the lowest node value
  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  // this method will find the highest node value
  findMax() {
    let current = this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.data
  }

  // this method will find a particular data point if it exists
  find(data) {
    let current = this.root
    while(current.data !== data) {
      if(data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if(current === null) {
        return null
      }
    }
    return current
  }

  // this method will return true if the data is present
  isPresent(data) {
    let current = this.root
    while(current) {
      if(data === current.data) {
        return true
      }
      if(data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data) {
    const removeNode = function(node, data) {
      if(node === null) {
        return null
      }
      // checking to see if node has children. If the node has children,
      if(data === node.data) {
        // node has no children
        if(node.left === null && node.right === null) {
          return null
        }
        // node has only right child
        if(node.left === null) {
          return node.right
        }
        // node has only left child
        if(node.right === null) {
          return node.left
        }
        // node has two children
        // set a tempNode as the immediate right child of the node we want to remove
        let tempNode = node.right
        // grab every left node until node.left is null. That node is the replacement for our initial node we want to replace
        while(tempNode.left !== null) {
          tempNode = tempNode.left
        }
        // set the tempNode to our new node to clean up the right side of the initial nodes children
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      // otherwise recursively call removeNode on the left until we find the node we want to remove (and subsequently check for children...)
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      // otherwise recursively call removeNode on the right until we find the node we want to remove (and subsequently check for children...)
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    // at the end of the function, use recursion starting at the root
    this.root = removeNode(this.root, data)
  }

  // this method will find the first level of the tree without any left children and measure its distance to the root
  findMinHeight = function(node = this.root) {
    if(node === null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if(left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  // this method will find the first level of the tree without any left children and measure its distance to the root
  findMaxHeight = function(node = this.root) {
    if(node === null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if(left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  // this method will determine if the tree is balanced between the sides within one node
  isBalanced = function() {
    return(this.findMinHeight() >= this.findMaxHeight() - 1 )
  }

  // in order of value of all nodes
  inOrder() {
    if(this.root === null) {
      return null
    } else {
      const result = new Array()
      function traverseInOrder(node) {
        // an example on short circuit evaluation. Essentially, when using the && operator the first value has to be truthy or it won't even bother running the second value, hence you can short circuit the line of code
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  // in order of leftmost nodes in order on the tree at each level then the leftmost on the right
  preOrder() {
    if(this.root === null) {
      return null
    } else {
      const result = new Array()
      function traversePreOrder(node) {
        result.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  // in order of leaves furthest left in the tree back up to root then the leftmost leaves on the right
  postOrder() {
    if(this.root === null) {
      return null
    } else {
      const result = new Array()
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.data)
      }
      traversePostOrder(this.root)
      return result
    }
  }

  // in order left to right at each level of the tree
  levelOrder() {
    let result = []
    let tempArray = []
    if(this.root !== null) {
      tempArray.push(this.root)
      while(tempArray.length > 0) {
        let node = tempArray.shift()
        result.push(node.data)
        if(node.left !== null) {
          tempArray.push(node.left)
        }
        if(node.right !== null) {
          tempArray.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const bst = new BinarySearchTree()

bst.add(15)
bst.add(7)
bst.add(4)
bst.add(1)
bst.add(16)
bst.add(19)
bst.add(21)
// bst.remove(4)
// console.log(bst.findMin())
// console.log(bst.findMax())
// bst.remove(7)
// console.log(bst.findMax())
// console.log(bst.isPresent(4))

bst.remove(15)

console.log(bst.root)
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
console.log(bst.levelOrder())