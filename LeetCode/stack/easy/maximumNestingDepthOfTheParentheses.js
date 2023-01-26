

const str = "(1)+((2))+(((3)))"
var maxDepth = function(s) {
  // declare an int as a stack
  let stack = 0
  // declare an int max tracker
  let max = 0

  // iterate through the string. For each opening paren, add one to the stack. For each closing paren subtract one from stack.
  for(let l of s) {
    if(stack > max) max = stack
    if(l === "(") stack++
    if(l === ")") stack--
  }
  // At each iteration check to see if the stack value is higher than max value, set max to stack
  
  return max
};

c({res: maxDepth(str)})