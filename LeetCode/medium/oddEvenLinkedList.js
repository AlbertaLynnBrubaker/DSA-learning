
const lL = {val:1, next:{val:2, next:{val:3, next:{val:4, next: {val:5, next: {val: 6, next: null}}}}}}
const lL1 = {val:1, next:{val:2, next:{val:3, next:{val:4, next: {val:5, next: null}}}}}

var oddEvenList = function(head) {
  if(!head) return null
  if(!head.next) return head
  let odd = head
  let even = head.next
  let currO = odd
  let currE = even
  while(currE.next && currO.next) {
    currO.next = currO.next.next
    currE.next = currE.next.next
    currO = currO.next
    if(currE.next){
      currE = currE.next
    }
  }
  currO.next = even
  return odd
};

c({ll: oddEvenList(lL1)})