

var makeGood = function(s) {
  const stack = []

  for(let current of s) {
    if(!stack.length) stack.push(current)
    else {
      let stackLast = stack[stack.length - 1]
      if(isBadPair(stackLast, current)) stack.pop()
      else stack.push(current)
    }
  }

  return stack.join('')  
};

const isBadPair = function(char1, char2) {
  let difference = char1.charCodeAt(0) - char2.charCodeAt(0)
  return Math.abs(difference) === 32
}

c({res: makeGood("leEeetcode")})