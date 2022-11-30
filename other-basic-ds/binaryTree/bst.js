class BST {
  constructor() {
    this.root = null
  }

  add(value) {
    const node = this.root

    if(node === null) {
      this.root = new BSTNode(value)
      return
    } else {
      const searchTree = function(node) {

        if(value < node.value) {

          if(node.left === null) {
            node.left = new BSTNode(value)
            return
          } else {
            return searchTree(node.left)
          }

        } else if(value > node.value) {

          if(node.right === null) {
            node.right = new BSTNode(value)
            return
          } else {
            return searchTree(node.right)
          }

        } else {

          return null

        }
      }
      return searchTree(node)
    }
  }

  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.value
  }

  findMax() {
    let current = this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.value
  }

  find(value) {
    let current = this.root
    while(current.value !== value) {
      if(value < current.value) {
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

  isPresent(value) {
    let current = this.root
    while(current) {
      if(value === current.value) {
        return true
      }
      if(value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(value) {
    const removeNode = function(node, value) {
      if(node === null) {
        return null
      }
      if(value === node.value) {
        if(node.left === null && node.right === null) {
          return null
        }
        if(node.left === null) {
          return node.right
        }
        if(node.right === null) {
          return node.left
        }

        let tempNode = node.right
        while(tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
        return node
      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }
    this.root = removeNode(this.root, value)
  }

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

  isBalanced = function() {
    return(this.findMinHeight() >= this.findMaxHeight() - 1 )
  }

}

class BSTNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

BST.fromValues = function(...values) {
  const bst = new BST()
  for(let i = 0; i < values.length; i++) {
    bst.add(values[i])
  }
  return bst
}


module.exports = { BST, BSTNode }