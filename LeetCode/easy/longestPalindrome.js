var longestPalindrome = function(s) {
  const map = new Map()
  let counter = 0
  let firstOne = true

  for(letter of s){
    if(letter in map) {
      map[letter] += 1
    } else {
      map[letter] = 1
    }
  }

  for(letter in map) {
    if(map[letter] % 2 === 1)  {
      if(firstOne) {
        counter++
        firstOne = false
      }
    }
    if(map[letter] > 1) {
    counter = counter + (map[letter] - (map[letter] % 2))
    }
  }
  return counter
};

console.log(longestPalindrome('ccc'))