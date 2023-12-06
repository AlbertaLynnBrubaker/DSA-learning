const { c } = require('../../helper/consoleLogHelper')

// var reverseWords = function(s) {
//     s = s.split(' ')
//     let result = ''
//     var regex = /^\s*$/

//     for(let i = s.length - 1; i >= 0; i--) {
//         if(RegExp(regex).test(s[i])) s.pop()
//         else result === '' ? result = s[i] : result = result + " " + s[i]
//     }
//     return result
// };

var reverseWords = function(s) {
    return s.trim().split(" ").filter(c => c.trim()).reverse().join(" ")
};

c({res: reverseWords("a good   example")})