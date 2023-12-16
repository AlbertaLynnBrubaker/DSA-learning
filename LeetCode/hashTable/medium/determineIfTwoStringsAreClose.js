

let word1 = "abbzccca", word2 = "babzzczc"

// WITH ARRAYS
// var closeStrings = function(w1, w2) {
//     if(w1.length!==w2.length){return false}
//     const tem1 = Array(26).fill(0)
//     const tem2 = Array(26).fill(0)
//     for(let i = 0; i<w1.length;i++){
//         tem1[w1[i].charCodeAt(0)-97]=(tem1[w1[i].charCodeAt(0)-97] || 0) +1
//         tem2[w2[i].charCodeAt(0)-97]=(tem2[w2[i].charCodeAt(0)-97] || 0) +1
//     }
//     for(let i=0;i<tem1.length;i++){
//         if((tem1[i]>0 && tem2[i]===0)||(tem2[i]>0 && tem1[i]===0)){
//             return false
//         }
//     }
//     return tem1.sort((a,b)=>a-b).join('')===tem2.sort((a,b)=>a-b).join('')
// };

// WITH OBJECTS
// function getSortedItems(word) {

//     const group = {};

//     for (let c of word) {
//         group[c] = (group[c] || 0) + 1;
//     }

//     return {
//         keys: Object.keys(group).sort(),
//         counts: Object.values(group).sort((a, b) => a - b),
//     };

// }

// var closeStrings = function(word1, word2) {

//     if (word1.length !== word2.length) {
//         return false;
//     }
    
//     const group1 = getSortedItems(word1);
//     const group2 = getSortedItems(word2);

//     for (let i = 0; i < group1.keys.length; i++) {
//         if (group1.keys[i] !== group2.keys[i] || group1.counts[i] !== group2.counts[i]) {
//             return false;
//         }
//     }

//     return true;

// };

c({res: closeStrings(word1, word2)})