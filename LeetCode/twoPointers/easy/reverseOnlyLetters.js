

var reverseOnlyLetters = function(s) {
  const string = s.split('')
  let left = 0
  let right = s.length - 1

  while(left <= right) {
    let tempLeft = s[left].toLowerCase()
    let tempRight = s[right].toLowerCase()
    let uniLeft = tempLeft.charCodeAt() - 97
    let uniRight = tempRight.charCodeAt() - 97

    if(uniLeft < 0 || uniLeft > 25) {
      left++
      continue
    }
    if(uniRight < 0 || uniRight > 25) {
      right--
      continue
    }
    let temp = string[left]
    string[left] = string[right]
    string[right] = temp
    left++
    right--
  }
  return string.join('')
};

c({res: reverseOnlyLetters("ab-cd")})
