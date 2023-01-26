
// Works with // O(3n) O(2n)
var backspaceCompare = function(s, t) {
  let length = s.length >= t.length ? s.length : t.length
  const sStack = []
  const tStack = []

  for(let i = 0; i < length; i++) {
    if(s[i] === '#') sStack.pop()
    else sStack.push(s[i])
    if(t[i] === '#') tStack.pop()
    else tStack.push(t[i])
  }
  c({sStack, tStack})
  return sStack.join('') === tStack.join('')
}

// LeetCode's space time calcs aren't accurate at all
// O(n) O(1)
// var backspaceCompare = function(s, t) {
//   let bsS = 0
//   let bsT = 0
  
//   while(s.length > 0 || t.length > 0) {
//     if(s[s.length - 1] === '#') {
//       s = s.slice(0, -1)
//       bsS++
//       continue
//     }
//     if(t[t.length - 1] === '#') {
//       t = t.slice(0, -1)
//       bsT++
//       continue
//     }
//     if(bsS > 0) {
//       s = s.slice(0, -1)
//       bsS--
//       continue
//     }
//     if(bsT > 0) {
//       t = t.slice(0, -1)
//       bsT--
//       continue
//     }
//     if(s[s.length - 1] === t[t.length - 1]) {
//       s = s.slice(0, -1)
//       t = t.slice(0, -1)
//     } else {
//       return false
//     }
//   }
//   return true
// }

// cleaner than my solution for sure but same time/space
// const backspaceCompare = (S, T) => { 
//   return edit(S) === edit(T);
  
//   function edit(str) {
//       let result = '';
//       let backspaces = 0;
      
//       for (let i = str.length - 1; i >= 0; i -= 1) {        
//           if (str[i] === '#') {
//               backspaces += 1;
//           } else if (backspaces > 0) {
//               backspaces -= 1;
//           } else {
//               result = str[i] + result;
//           }
//       }
      
//       return result;
//   }
// };

c({res: backspaceCompare("a#c", "b")})