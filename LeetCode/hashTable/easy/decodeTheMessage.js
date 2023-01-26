const { c } = require('../../helper/consoleLogHelper')

var decodeMessage = function(key, message) {
  const cypher = {}
  let charCode = 65
  let result = ""

  for(let l of key) {
    if(l === " ") continue
    if(!(l in cypher)) {
      cypher[l] = String.fromCharCode(charCode).toLowerCase()
      charCode++
    } 
  }

  for(let char of message) {
    if(char === " ") {
      result += " "
    } else {
      result += `${cypher[char]}`
    }
  }

  return result
};

c({res: decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")})