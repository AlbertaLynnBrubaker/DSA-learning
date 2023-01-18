const l1 = {val:5, next:{val:2, next:{val:3, next:{val:1, next: {val:4, next: null}}}}}

var sortList = function(head) {
  if(!head || !head.next) return head

  const [left, right] = split(head)
  const root = {val: null, next: null}
  return merge(root, sortList(left), sortList(right))
};

function split(node) {
  let slow = node
  let fast = node
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const left = node
  const right = slow.next
  slow.next = null
  return [left, right]
}

function merge(root, left, right) {
  let pointer = root

  while(left !== null || right !== null) {
    if(!left) {
      pointer.next = right
      right = right.next
    } else if(!right) {
      pointer.next = left
      left = left.next
    } else {
      if(left.val < right.val) {
        pointer.next = left
        left = left.next
      } else {
        pointer.next = right
        right = right.next
      }
    }
    pointer = pointer.next
  }
  return root.next
}

c({res: sortList(l1)})
