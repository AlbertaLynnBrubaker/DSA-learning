const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

const list = createList([1,0,1])

var getDecimalValue = function(head) {
  // push each node's val into a stack
  const stack = []
  // create a sum variable
  let sum = 0

  let node = head
  while(node) {
    stack.push(node.val)
    node = node.next
  }
  // decrement through the stack, calculate the decimal value of the value and add to the sum
  for(let i = stack.length - 1; i >= 0; i--) {
    let n = (stack.length - 1) - i
    if(stack[i] === 1) sum += Math.pow(2, n)
  }
  return sum
};

c({res: getDecimalValue(list.head)})