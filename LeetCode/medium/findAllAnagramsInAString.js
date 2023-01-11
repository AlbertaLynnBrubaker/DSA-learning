

var findAnagrams = function(s, p) {  
  const pHash = {}
  for(l of p) {
    pHash[l] ? pHash[l]++ : pHash[l] = 1
  }
  
  const res = []
  let start = 0
  let end = 0
  while(end < s.length) {
    if(pHash[s[end]] > 0) {
      pHash[s[end]]--
      end++
      if(end - start === p.length) res.push(start)
    } else if(start === end) {
      start++
      end++
    } else {
      pHash[s[start]]++
      start++
    }
  }
  return res
}

c({fAna: findAnagrams('cbaebabacd', 'abc')})