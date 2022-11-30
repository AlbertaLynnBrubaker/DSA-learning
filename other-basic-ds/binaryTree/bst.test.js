const { BST } = require('./bst')
const { BSTNode } = require('./bst')

describe('#add', () => {
  describe('with root equal to null', () => {
    test('it replaces root with new node', () => {
      const bst = new BST()
      const node = new BSTNode(10)

      bst.add(node.value)

      expect(bst.root.value).toBe(10)
    })
  })

  describe('with node equal to root', () => {
    test('it does not add new node', () => {
      const bst = new BST()
      const node = new BSTNode(10)

      bst.add(node.value)
      bst.add(10)

      expect(bst.root.value).toBe(10)
      expect(bst.root.left && bst.root.right).toBeNull()
    })
  })

  describe('with node less than root', () => {
    test('it adds a node to the left of root', () => {
      const bst = new BST()
      const node = new BSTNode(10)

      bst.add(node.value)
      bst.add(8)
      bst.add(5)

      expect(bst.root.left.value).toBe(8)
      expect(bst.root.left.left.value).toBe(5)
    })
  })

  describe('with node more than root', () => {
    test('it adds a node to the right of root', () => {
      const bst = new BST()
      const node = new BSTNode(10)

      bst.add(node.value)
      bst.add(12)
      bst.add(11)

      expect(bst.root.right.value).toBe(12)
      expect(bst.root.right.left.value).toBe(11)
    })
  })
})

describe('#findMin', () => {
  test('it finds the lowest value in the BST', () => {
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    const bst2 = BST.fromValues(3, 4, 5, 6, 7, 8, 9, 2)

    expect(bst.findMin()).toBe(1)
    expect(bst2.findMin()).toBe(2)
  })
})

describe('#findMax', () => {
  test('it finds the lowest value in the BST', () => {
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    const bst2 = BST.fromValues(3, 4, 5, 6, 7, 8, 9, 2)

    expect(bst.findMax()).toBe(21)
    expect(bst2.findMax()).toBe(9)
  })
})

describe('#find', () => {
  test('it finds the value if it exists', () => {
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    const bst2 = BST.fromValues(3, 4, 5, 6, 7, 8, 9, 2)

    expect(bst.find(16).value).toBe(16)
    expect(bst.find(8)).toBeNull()
    expect(bst2.find(5).value).toBe(5)
    expect(bst2.find(1)).toBeNull()
  })
})

describe('#isPresent', () => {
  test('it returns true if the data is present', () => {
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    const bst2 = BST.fromValues(3, 4, 5, 6, 7, 8, 9, 2)

    expect(bst.isPresent(16)).toBe(true)
    expect(bst.isPresent(8)).toBe(false)
    expect(bst2.isPresent(5)).toBe(true)
    expect(bst2.isPresent(1)).toBe(false)
  })
})

describe('#remove', () => {
  describe('the root does not exist', () => {
    test('it does nothing', () => {      
      const bst = BST.fromValues()  
      const node = bst.root
      
      expect(node).toBeNull()
    })
  })

  describe('the node does not exist', () => {
    test('it does nothing', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)  
      const node = bst.find(11)
      
      expect(node).toBeNull()
    })
  })

  describe('the node equals the root', () => {
    test('it removes the root and replaces it', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
      const node = bst.root      
      
      bst.remove(node.value)

      expect(bst.root.value).toBe(16)
    })
  })

  describe('the node has no children', () => {
    test('it removes the node', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
      const node = bst.root.left.left.left
      
      expect(node.left && node.right).toBeNull()
      
      bst.remove(node.value)
      const newNode = bst.root.left.left.left

      expect(newNode).toBeNull()
    })
  })

  describe('the node has only a right child', () => {
    test('it removes the node and replaces it', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
      const node = bst.root.right.right

      expect(node.left).toBeNull()
      expect(node.right.value).toBe(21)
      
      bst.remove(node.value)
      const newNode = bst.root.right.right

      expect(newNode.value).toBe(21)
    })
  })

  describe('the node has only a left child', () => {
    test('it removes the node and replaces it', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
      const node = bst.root.left.left

      expect(node.right).toBeNull()
      expect(node.left.value).toBe(1)
      
      bst.remove(node.value)
      const newNode = bst.root.left.left

      expect(newNode.value).toBe(1)
    })
  })

  describe('the node has two children', () => {
    test('it removes the node and replaces it with the leftmost right-side grandchild', () => {      
      const bst = BST.fromValues(15, 7, 4, 1, 10, 8, 13, 16, 19, 21)
      const node = bst.root.left

      expect(node.right.value).toBe(10)
      expect(node.left.value).toBe(4)
      
      bst.remove(node.value)
      const newNode = bst.root.left

      expect(newNode.value).toBe(8)
    })
  })  
})

describe('#findMinHeight', () => {
  test('it returns the number of levels down the tree the first node without two children occurs', () => {      
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    
    const heightRoot = bst.findMinHeight()
    const heightNode = bst.findMinHeight(bst.find(16))

    expect(heightRoot).toBe(1)
    expect(heightNode).toBe(0)
  })
})

describe('#findMaxHeight', () => {
  test('it returns the number of levels down the tree the last node without two children occurs from the specified node', () => {      
    const bst = BST.fromValues(15, 7, 4, 1, 16, 19, 21)
    
    const heightRoot = bst.findMaxHeight()
    const heightNode = bst.findMaxHeight(bst.find(16))

    expect(heightRoot).toBe(3)
    expect(heightNode).toBe(2)
  })
})

describe('#isBalanced', () => {
  test('it returns true if the binary search tree is balanced', () => {      
    const bst = BST.fromValues(15, 7, 8, 4, 1, 17, 16, 19, 21)    

    expect(bst.isBalanced()).toBe(true)
  })

  test('it returns false if the binary search tree is not balanced', () => {      
    const bst = BST.fromValues(3, 4, 5, 6, 7, 8, 9, 2)

    expect(bst.isBalanced()).toBe(false)
  })
})
