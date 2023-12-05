

const sen = 'DRR'

// As I iterate through the senate array, add the opposing party to their queue. Each time I iterate, check for a member in that party's queue and shift it.

// var predictPartyVictory = function(senate) {

//     senate = senate.split('')
//     let d = 0
//     let r = 0

//     while(senate.includes("R") && senate.includes("D")) {
//         if(senate[0] === "D") {
//             if(r === 0) {
//                 senate.push(senate.shift())
//                 d++
//             } else {
//                 senate.shift()
//                 r--
//             }
//         } else {
//             if(d === 0) {
//                 senate.push(senate.shift())
//                 r++
//             } else { 
//                 senate.shift()
//                 d--
//             }
//         }
        
//     }

//     return senate[0] === "D" ? "Dire" : "Radiant"
// };

var predictPartyVictory = function(senate) {
    const dQueue = []
    const rQueue = []
    let sLen = senate.length

    for(let i = 0; i < sLen; i++) {
        senate[i] === "D" ? dQueue.push(i) : rQueue.push(i)
    }

    while(dQueue.length > 0 && rQueue.length > 0) {
        const rPos = rQueue.shift()
        const dPos = dQueue.shift()
        if(rPos < dPos) rQueue.push(sLen++)
        else dQueue.push(sLen++)
    }

    return rQueue.length ? "Radiant" : "Dire"
};

c({result: predictPartyVictory(sen)})