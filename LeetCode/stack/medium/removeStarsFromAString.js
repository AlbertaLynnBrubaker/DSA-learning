const { c } = require('../../helper/consoleLogHelper')

// add each element to the stack that is a letter. Pop the last item off the stack for each star that comes up in the string.

// var removeStars = function(s) {
//     let stack = ''

//     for(let char of s) {
//         if(char === '*') stack = stack.slice(0, -1)
//         else stack += char
//     }

//     return stack
// };

var removeStars = function(s) {
    const stack = []

    for(let char of s) {
        if(char === '*') stack.pop()
        else stack.push(char)
    }
    
    return stack.join('')
}

c({res: removeStars('abc**def*')})