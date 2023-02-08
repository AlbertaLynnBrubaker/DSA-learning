const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

const list = createList([1,1,2,3,3])

var deleteDuplicates = function(head) {
  let current = head

  while(current && current.next) {
    if(current.val === current.next.val) current.next = current.next.next
    else current = current.next
  }
  return head
};

c({res: deleteDuplicates(list.head)})