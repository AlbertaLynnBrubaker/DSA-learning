

const allowed = "ab"
const words = ["ad","bd","aaab","baa","badab"]

var countConsistentStrings = function(allowed, words) {
  // make a set of allowed
  const allow = new Set(allowed)
  let consistent = 0
  c({allow})

  const isCon = function(word) {
    for(let letter of word) {
      if(!allow.has(letter)) return false
    }
    return true
  }
  // iterate through the strings in words, if any character is not in allowed return false for that word. Keep a tally of true and return
  for(let word of words) {
    if(isCon(word)) consistent++
  }
  
  return consistent
};


c({res: countConsistentStrings(allowed, words)})