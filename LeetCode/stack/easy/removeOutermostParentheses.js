

var removeOuterParentheses = function(s) {
  let stack = 0
  let results = "" 

  for(let l of s) {
    if(l === "(" && stack === 0) {
      stack++
    } else if(l === "(") {
      results += l
      stack++
    } 

    if(l === ")" && stack === 1) {
      stack--
    } else if(l === ")") {
      results += l
      stack--
    } 
  }
  return results
};

c({res: removeOuterParentheses("(()())(())(()(()))")})