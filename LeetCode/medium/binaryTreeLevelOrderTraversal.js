// var levelOrder = function(root) {
//   if(!root) return []

//   const queue = [root]
//   let nodeCounter = 0
//   let level = 0
//   let newLevel = []
//   const list = []
//   while(queue.length !== 0) {
//     node = queue.shift()
//     if(node === null) {
//       nodeCounter ++
//     } else{
//       if(newLevel.length === 0) {
//         level++
//         newLevel.push(node.val)
//         nodeCounter++
//       } else {
//         newLevel.push(node.val)
//         nodeCounter++
//       }
      
//       queue.push(node.left)      
//       queue.push(node.right)
//     }
//     if(nodeCounter === ((2 ** level) - 1) ){
//       list.push(newLevel)
//       newLevel = []
//     }
//   }
//   return list
// };

var levelOrderRecursive = function(root) {
  let list = []

  const traverseNode = (node, level) => {
    if(!node) return
    if(!list[level]) {
      list.push([])
    }
    list[level].push(node.val)
    traverseNode(node.left, level + 1)
    traverseNode(node.right, level + 1)
  }
  traverseNode(root, 0)
  return list
};

const levelOrder = (root) => {

  if (!root) return []

  const list = [];
  const queue = [root];

  while (queue.length > 0) {
      const queueLength = queue.length;
      const levelArray = [];

      for(let i = 0; i < queueLength; i++) {
          const node = queue.shift();
          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
          levelArray.push(node.val);
      }

      list.push(levelArray);
  }

  return list;
}

const rootNode1 = {val: 3, left: {val: 9, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}}, right: {val:20, left: {val: 15, left: null, right: null}, right:{val: 7, left: null, right: null}}}

const rootNode2 = {val: 1, left: null, right: {val: 2, left: null, right: null} }

const rootNode3 = {val:1, left: {val: 2, left: {val: 3, left: {val: 4, left: {val: 5, left: null, right: null}, right: null}, right: null}, right: null}, right: null}

console.log(levelOrder(rootNode3))