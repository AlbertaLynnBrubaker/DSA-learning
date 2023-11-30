

// we are provided a pre-loaded API function called guess() which will return a -1 if our guess is higher than the picked number, 1 if our guess is lower and 0 if our guess is correct.

// var guessNumber = function(n) {
//     let low = 1
//     let high = n
//     let myGuess = Math.floor(high/2) + 1
//     while(guess(myGuess) !== 0){
//         if(guess(myGuess) === 1) {
//             low = myGuess
//             myGuess = Math.floor((high + low)/2) + 1
//         }
//         if(guess(myGuess) === -1) {
//             high = myGuess
//             myGuess = Math.floor((high + low)/2)
//         }
//     }

//     return myGuess
// };

var guessNumber = function(n) {
    let low = 1
    let high = n
    while(true){
        let myGuess = Math.floor((high + low)/2)

        let res = guess(myGuess)

        if(res === 0) return myGuess
        if(res === 1) low = myGuess + 1
        if(res === -1) high = myGuess - 1
    }
};

function guess(g) {
    let p = 3
    if(g < p) return 1
    if(g > p) return -1
    return 0
}

c({result: guessNumber(3)})
