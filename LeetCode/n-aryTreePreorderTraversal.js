var preorder = function(root) {
  if(!root) return []
  return traverse(root, [])
};

const traverse = function(node, list) {
  list.push(node.val)

  node.children.forEach(child => {
    traverse(child, list)
  })
  return list
}




const preOrderIterative = (root) => {
  if(!root) return []
  let currentNode = root
  const list = []
  const queue = [root]

  while(queue.length) {
    list.push(currentNode.val)
    queue.shift()

    if(currentNode.children.length > 0) {
      queue.unshift(...currentNode.children)
    }
    currentNode = queue[0]
  }
  return list
}

const rootNode = {val: 1, children:[{val:3, children:[{val:5, children:[]}, {val:6, children:[]}]}, {val:2, children:[]}, {val:4, children: []}]}

console.log(preOrderIterative(rootNode))