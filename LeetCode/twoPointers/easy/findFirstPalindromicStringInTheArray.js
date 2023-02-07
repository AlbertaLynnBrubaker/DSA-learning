

var firstPalindrome = function(words) {
  for(let i = 0; i < words.length; i++) {
    const word = words[i]
    let isPal = false
    let left = 0
    let right = word.length - 1
    while(left <= right) {
      if(word[left] !== word[right]) {
        isPal = false
        break
      }
      else {
        isPal = true
        left++
        right--
      }
    }
    if(isPal) return word
  }
  return ""
};

c({res: firstPalindrome(["def","ghi"])})