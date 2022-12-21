function isValidBST(root) {
  if(!root) return true
  return checkSubtreeBFS([{currentNode: root, lower: -Infinity, upper: Infinity}])
}

function checkSubtreeBFS(queue = []) {
  if(!queue.length) {
    return true
  }
  const { currentNode, lower, upper } = queue.shift()
  const { value, left, right } = currentNode
  
  if(value <= lower || value >= upper) {
    return false
  }
  if(left) {
    queue.push({currentNode: left, lower, upper: value})
  }
  if(right) {
    queue.push({currentNode: right, lower: value, upper})
  }

  return checkSubtreeBFS(queue)
}