const { c } = require('../../helper/consoleLogHelper')

var sortSentence = function(s) {
  s = s.split(' ')

  let results = new Array(s.length)
  for(let i = 0; i < s.length; i++) {
    let index = s[i][s[i].length - 1] - 1
    results[index] = s[i].slice(0, -1)
  }
  return results.join(' ')
};

c({res: sortSentence("sentence4 a3 is2 This1")})