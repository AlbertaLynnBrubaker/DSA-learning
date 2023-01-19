var reverseList = function(head) {
  return head ? reverse(head, null) : head;
};

function reverse (node, previous) {
  let newHead = node;

  // recursive call to tail
  if (node.next) newHead = reverse(node.next, node);
  // reverse from tail all the way up to head
  node.next = previous;
  
  return newHead;
}