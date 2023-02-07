

var diStringMatch = function(s) {
  // make pointers to hold the value starting positions of highest necessary number and lowest
  let d = s.length
  let i = 0

  const perm = []
  // for each element in s, push either the i value and increment i or the d value and decrement d. This will ensure that each value is appropriately placed

  for(ch of s) {
    if(ch === "I") {
      perm.push(i)
      i++
    } else {
      perm.push(d)
      d--
    }
  }
  perm.push(i)
  return perm
};

c({res: diStringMatch("IDID")})