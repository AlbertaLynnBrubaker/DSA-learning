var removeDuplicates = function(s) {
  // create a stack as an array
  const stack = []
  let idx = 0

  // iterate through the string. As each index check if it is the same as the last element on the stack. If true, remove both from the string and pop the stack.
  while(idx < s.length) {
    let last = stack[stack.length - 1]
    
    if(s[idx] === last) stack.pop()
    else stack.push(s[idx])
    
    idx++
  }

  // return the modified s
  return stack.join('')
};

// Top Leetcode
// const removeDuplicates = s => {
//   const stack = [];
//   for (const char of s) {
//     stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
//   }
//   return stack.join('');
// };


c({res: removeDuplicates("abbaca")})