const { c } = require('../../helper/consoleLogHelper')

const word1 = 'abc', word2 = 'pqr'

var mergeAlternately = function(word1, word2) {
  let result = []
  const len = word1.length > word2.length ? word1.length : word2.length 

  for(let i = 0; i < len; i++) {
    if(word1[i]) result.push(word1[i])
    if(word2[i]) result.push(word2[i])
  }
  return result.join('')
};

c({res: mergeAlternately(word1, word2)})