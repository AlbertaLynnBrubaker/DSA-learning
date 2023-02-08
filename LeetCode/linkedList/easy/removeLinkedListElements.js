const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

const list = createList([1,2,6,7])

var removeElements = function(head, val) {
  let current = head

  while(current && current.next) {
    if(current.val === val) {
      if(current === head) head = head.next
      current = head
    } else if(current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head && head.val !== val ? head : null
};

// Recursion Option -> better time worse memory
// var removeElements = function(head, val) {
//   if (head == null) return head;

//   if (head.val == val) {
//       return removeElements(head.next, val);
//   } else {
//       head.next = removeElements(head.next, val)
//       return head
//   }
// };

c({res: removeElements(list, 7)})