// Create a function that reverses a string:
// 'Hi, my name is Alie.' should return '.eilA si eman ym ,iH'


// MY SOLUTION
function reverse(str) {
  let reverseStr = []

  for(let i = str.length - 1; i >= 0; i--) {
    reverseStr.push(str[i])
  }

  return reverseStr.join('')
}

console.log(reverse('Hi, my name is Alie.'))

// ANDREI'S SOLUTION
function andreiReverse(str) {
  // check input --> Could ask a clarifying question of the interviewer to be sure our input is a string. If they give no stipulation =>
  if(!str || typeof str !== 'string') {
    return 'input must be a string!'
  }
  if(str.length < 2 ) {
    return str
  }

  const backwards = []
  const totalItems = str.length - 1
  for(let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }

  return backwards.join('')  
}

function andreiReverse2(str) {
  return str.split('').reverse().join('')
}

// a sleek, modern ES6 version
  // IN AN INTERVIEW, I SHOULD BUILD THE UGLY VERSION FIRST AND OFFER TO REFACTOR DOWN TO THESE MODERN VERSIONS. Or at least talk about how this function declaration is an option even if I don't write it this way.
const andreiReverse3 = str => [...str].reverse().join('')
