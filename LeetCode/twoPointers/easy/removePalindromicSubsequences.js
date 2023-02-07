

var removePalindromeSub = function(s) {
  let left = 0
  let right = s.length - 1

  while(left <= right) {
    if(s[left] !== s[right]) return 2
    left++
    right--
  }
  return 1
};

c({res: removePalindromeSub("bab")})