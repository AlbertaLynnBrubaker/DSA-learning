var middleNode = function(head) {
  if(head === null) return null
  
  if(head.next === null) return head
  
  let slow = head.next
  let fast = head.next.next
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};

console.log(middleNode({val: 1, next:{val:2, next:{val:3, next:{val:4, next:{val:5, next: {val:6, next: null}}}}}}))