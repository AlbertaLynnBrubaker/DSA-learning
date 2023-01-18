

const lL = {val:1, next:{val:2, next:{val:3, next:{val:4, next: {val:5, next: null}}}}}

var removeNthFromEnd = function(head, n) {
  if(!head || !head.next) return null
  let curr = head
  let length = 1
  while(curr.next) {
    curr = curr.next
    length++
  }
  let tracer = length - n + 1
  curr = head
  let idx = 1
  let prev
  if(tracer === idx) return curr.next
  while(idx < tracer) {
    prev = curr
    curr = curr.next
    idx++
  }
  if(curr) {
    let next = curr.next
    prev.next = next
  } else {
    prev.next = null
  }

  return head
};

c({res: removeNthFromEnd(lL, 2)})