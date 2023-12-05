const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

const ll = createList([1,2,3,7,4,5,6])

var deleteMiddle = function(head) {
    if(head.next === null) return null
    let slow = head
    let fast = head
    let prev = head

    while(fast && fast.next) {
        prev = slow
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next
    return head
};

c({res: deleteMiddle(ll.head)})