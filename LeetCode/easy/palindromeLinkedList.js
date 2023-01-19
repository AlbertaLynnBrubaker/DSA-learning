

const ex1 = {val:1, next:{val:2, next:{val:2, next:{val:1, next: null}}}}
const ex2 = {val:1, next:{val:2, next: null}}
const ex3 = null
const ex4 = {val:1, next: null}
const ex5 = {val:1, next:{val:2, next:{val:1, next: null}}}

// var isPalindrome = function(head) {
//   if(!head || !head.next) return true
//   const stack = []
//   let curr = head

//   while(curr){
//     stack.push(curr.val)
//     curr = curr.next
//   }
//   let left = 0
//   let right = stack.length - 1
//   while(left <= right) {
//     if(stack[left] === stack[right]) {
//       left++
//       right--
//     } else return false
//   }
//   return true
// };

var isPalindrome = function(head) {
  if(!head || !head.next) return true
  let slow = head
  let fast = head

  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = slow
  slow = slow.next
  prev.next = null
  while(slow) {
    let temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }

  pointer1 = head
  pointer2 = prev
  while(pointer2) {
    if(pointer1.val !== pointer2.val) return false
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }
  return true
};

c({res: isPalindrome(ex2)})