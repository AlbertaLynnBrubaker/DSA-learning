// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// const a1 = ['a', 'b', 'c', 'x']
// const a2 = ['z', 'y', 'i']
// => false

const a1 = ['a', 'b', 'c', 'x']
const a2 = ['z', 'y', 'a']
// => true

// ask if function should take two arrays as arguments
// ensure that function will return a boolean
// ask if time or space complexity are prioritzed (possibly just want excellent efficiency)

// start with naive code/brute force approach. Don't need to write the brute force code, just voice it to interviewer


// BRUTE FORCE APPROACH - O(n^2)
// const containsCommonElements = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) return true
//     }
//   }
//   return false
// }

// console.log(containsCommonElements(a1, a2))

// a Hash Map is a common solution to nested loops
// a1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }


const containsCommonElements = (arr1, arr2) => {
  const map = {}
  // loop through first array and add each element as a property in an object
  for(let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }

  // loop through second array and check if each element exist in the object
  for(let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) return true
  }
  
  return false
}

const containsCommonElements3 = (arr1, arr2) => {
  let result = false
  // loop through first array and add each element as a property in an object
  const map = new Set()
  arr1.forEach(element => {
    map.add(element)
  })

  // loop through second array and check if each element exist in the object
  arr2.forEach(element => {
    if(map.has(element)) {
      result = true
      return result
    }
  })
  
  return result
}

// same as above using built in JS in ES6
const containsCommonElements2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonElements3(a1, a2))

