
// ASCII codes for a,e,i,o,u -> 97, 101, 105, 111, 117

var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let window = 0
    let mostVowels = 0

    for(let i = 0; i < k; i++) {
        if(vowels.has(s[i])) window++
    }
    mostVowels = window
    for(let i = k; i  < s.length; i++) {
        if(vowels.has(s[i - k])) window--
        if(vowels.has(s[i])) window++
        if(window > mostVowels) mostVowels = window
    }
    return mostVowels
};

// var maxVowels = function(s, k) {
//     let max = 0;
//     let count = 0;

//     for (let i=0; i < s.length; i++) {
//         if (isVowel(s[i])) {
//             count++;
//         }

//         if (i >= k && isVowel(s[i-k])) {
//             count--;
//         }

//         max = Math.max(max, count);
//     }

//     return max;
// };

// function isVowel(ch) {
//     return (
//         ch === "a" ||
//         ch === "e" ||
//         ch === "i" ||
//         ch === "o" ||
//         ch === "u"  
//     );
// }

c({res: maxVowels("weallloveyou", 7)})