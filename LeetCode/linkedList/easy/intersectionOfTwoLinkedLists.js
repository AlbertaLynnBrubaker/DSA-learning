const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

const listA = createList([1,9,1])
const listB = createList([3])
const joinList = createList([2,4])

listA.tail.next = joinList.head
listA.tail = joinList.tail
listB.tail.next = joinList.head
listB.tail = joinList.tail

var getIntersectionNode = function(headA, headB) {
  const stackA = []
  const stackB = []
  let nodeA = headA
  let nodeB = headB

  while(nodeA || nodeB) {
    if(nodeA) {
      stackA.push(nodeA)
      nodeA = nodeA.next
    } 
    if(nodeB) {
      stackB.push(nodeB)
      nodeB = nodeB.next
    }
  }

  const len = stackA.length > stackB.length ? stackB.length : stackA.length
  let result = {val: 0}
  for(let i = 0; i < len; i++) {
    let aIdx = (stackA.length - 1) - i
    let bIdx = (stackB.length - 1) - i

    if(stackA[aIdx] !== stackB[bIdx]) return result.val
    result = stackA[aIdx]
  }
  return result.val
};

c({res: getIntersectionNode(listA.head, listB.head)})