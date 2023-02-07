const { c } = require('../../helper/consoleLogHelper')

var reversePrefix = function(word, ch) {
  word = word.split('')
  // set left as 0
  let left = 0
  let right
  // iterate through word to find ch
  for(let i = 0; i < word.length; i++) {
    if(word[i] === ch) {
      // set ch index as right index
      right = i
      break
    }
  }

  // while swap the characters
  while(left <= right) {
    let temp = word[left]
    word[left] = word[right]
    word[right] = temp
    left++
    right--
  }
  return word.join('')
};

c({res: reversePrefix("abcdefd", "d")})