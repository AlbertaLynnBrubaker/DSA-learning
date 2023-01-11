
var getHint = function(secret, guess) {
  let cows = 0
  let bulls = 0
  const array = new Array(10).fill(0)

  for(let i = 0; i < secret.length; i++) {
    let secretInt = parseInt(secret[i])
    let guessInt = parseInt(guess[i])

    if(secretInt === guessInt) {
      bulls++
      continue
    }
    if(array[secretInt] < 0) {
      cows++
    }
    if(array[guessInt] > 0) {
      cows++
    }

    array[secretInt]++
    array[guessInt]--
  }
  return `${bulls}A${cows}B`
}

console.log(getHint('1122', '2211'))

// I need to go through each string and compare to all the other indices to see if they match. If the indices are equal, the number is a bull. If the indices don't match, the number is a cow.

// I could create an obj of secret when the value is the key and the index is the number














// var characterReplacement = function(s, k) {
//   let start = 0
//   let end = 0
//   let charCount = 0
//   const visited = {}

//   while(end < s.length) {
//     const idx = s[end]
//     if(visited[idx]) visited[idx]++
//     else visited[idx] = 1

//     if(visited[idx] > charCount) charCount = visited[idx]

//     // if the number of characters different than s[end] exceeds k, then we move the window
//     if(end - start + 1 - charCount > k) {
//       visited[s[start]]--
//       start++
//     }
//     end++
//   }
  
//   return end - start
// };

