

var firstUniqChar = function(s) {
  const map = {}

  for(let i = 0; i < s.length; i++) {
    if(s[i] in map) map[s[i]] = -1
    else map[s[i]] = i
  }

  for(char of s) {
    if(map[char] !== -1 ) return map[char]
  }
  return -1
};

c({res: firstUniqChar("aabb")})