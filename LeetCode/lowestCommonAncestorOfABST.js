// var lowestCommonAncestor = function(root, p, q) {

//     const checkSubtree = function(node) {
//       if(node === null) return
      
//       // both p & q are left of node
//       if(node.val > p.val && node.val > q.val) {
//         return checkSubtree(node.left)
//       }
//       // both p & q are right of node
//       if(node.val < p.val && node.val < q.val) {
//         return checkSubtree(node.right)
//       }
//       // one is left or equal to the node and one is right or equal to the node --> LCA === node
//       return node
//     }
//     return checkSubtree(root)
// };

var lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

// ITERATIVE

// var lowestCommonAncestor = function(root, p, q) {
//   let current = root;

//   while(current !== null) {
//       if(p.val < current.val && q.val < current.val) {
//           current = current.left;
//       } else if(p.val > current.val && q.val > current.val) {
//           current = current.right;
//       } else {
//           return current;
//       }
//   }
  
// };



const BST = {val: 6, left: {val: 2, left: {val: 0, left: null, right: null}, right: {val: 4, left: {val: 3, left: null, right: null}, right: {val: 5, left: null, right: null}}}, right: {val: 8, left: {val: 7, left: null, right: null}, right: {val: 9, left: null, right: null}}}

const p1 = {val: 2, left: {val: 0, left: null, right: null}, right: {val: 4, left: {val: 3, left: null, right: null}, right: {val: 5, left: null, right: null}}}

const q1 = {val: 8, left: {val: 7, left: null, right: null}, right: {val: 9, left: null, right: null}}

const p2 = {val: 2, left: {val: 0, left: null, right: null}, right: {val: 4, left: {val: 3, left: null, right: null}, right: {val: 5, left: null, right: null}}}

const q2 = {val: 4, left: {val: 3, left: null, right: null}, right: {val: 5, left: null, right: null}}

const p3 = {val: 3, left: null, right: null}

const q3 = {val: 5, left: null, right: null}

console.log(lowestCommonAncestor(BST, p3, q3))