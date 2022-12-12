// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// Should return 1

// Given an array = [2, 3, 4, 5]
// Should return undefined

const array = [2, 3, 4, 5]

// MY SOLUTION
const firstRecurringCharacter = (array) => {
  if(!Array.isArray(array) || array.length < 2) {
    return undefined
  }

  const prevSet = new Set()

  // for(let i = 0; i < array.length; i++) {
  //   if(prevSet.has(array[i])) {
  //     return array[i]
  //   }
  //   prevSet.add(array[i])
  // }

  for(let element of array) {
    if(prevSet.has(element)) {
      return element
    }
    prevSet.add(element)
  }

  return undefined
} // time O(n) space O(n)

// ANDREIS SOLUTION
const andreisFirstRecurringCharacter = (input) => {
  // skipped input validation but mentioned it
  // first crack was nested loops just to show the naive/brute force approach
  
  // uses primitives and no ES6 syntax
  let map = {}
  for(let i = 0; i < input; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    return undefined
  }
} // time O(n) space O(n)

console.log(firstRecurringCharacter(array))