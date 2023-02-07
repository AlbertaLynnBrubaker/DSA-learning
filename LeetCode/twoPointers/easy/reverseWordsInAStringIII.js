

var reverseWords = function(s) {
  const str = []
  let left = 0
  let right = 0
  while(left < s.length - 1) {
    if(s[right] !== " " && right < s.length) {
      right++
      continue
    }
    
    for(let i = right - 1; i >= left; i--) {
      str.push(s[i])
    }

    if(right < s.length) str.push(" ")
    right++
    left = right
  }
  return str.join("")
};

c({res: reverseWords("Let's take LeetCode contest")})