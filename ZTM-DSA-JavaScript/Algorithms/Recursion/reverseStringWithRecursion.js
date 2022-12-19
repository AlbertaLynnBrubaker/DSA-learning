//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIter(str) {
  const reversed = []

  for(let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i])
  }
  
  return reversed.join('')
}

console.log(reverseStringIter('yoyo mastery'))
//should return: 'yretsam oyoy'

function reverseStringRecur(str) {
  if(str === '') {
    return ''
  } else {
    return reverseStringRecur(str.substr(1)) + str.charAt(0)
  }
  
}

console.log(reverseStringRecur('hello'))