/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const output = s.split('')
    let left = 0
    let right = s.length - 1

    while(left < right) {
        if(isAVowel(output[left]) && isAVowel(output[right])) {
            let temp = output[left]
            output[left] = output[right]
            output[right] = temp
            left++
            right--
        }        
        if(!isAVowel(output[left])) {
            left++
        } 
        if(!isAVowel(output[right])) {
            right--
        }
    }
    return output.join('')
};

const isAVowel = function(c) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])

    if(vowels.has(c)) return true
    return false
}