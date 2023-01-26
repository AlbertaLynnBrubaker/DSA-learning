

const words1 = ["gin","zen","gig","msg"]
const words2 = ["a"]

// "a" is 97 in ASCII

var uniqueMorseRepresentations = function(words) {
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]  
  const set = new Set()
  // convert the words array into an array of words in morse code
  // push each word into a set
  
  words.forEach(word => {
    word = [...word].map(letter => letter = morseCode[letter.charCodeAt() - 97]).join('')
    set.add(word)
  })

  // return the set.size
  return set.size
};

c({res: uniqueMorseRepresentations(words1)})