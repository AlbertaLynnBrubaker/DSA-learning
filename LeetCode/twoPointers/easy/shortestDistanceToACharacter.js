

var shortestToChar = function(s, c) {
  const answer = new Array(s.length)
  let leftChar = s.indexOf(c)
  let rightChar = leftChar

  for(let i = 0; i < s.length; i++) {
    if(s[i] === c) {
      leftChar = i
      rightChar = s.indexOf(c, leftChar + 1)
    }
    answer[i] = (Math.min(Math.abs(i - leftChar), Math.abs(i - rightChar)))
  }
  return answer
};

c({res: shortestToChar("abaa", "b")})