
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ""
  if(strs.length === 1) return strs[0]
  let res = ""
  
  for(let i = 0; i < strs[0].length; i++) {
    let isPrefix = false
    for(let j = 1; j < strs.length; j++) {
      if(strs[0][i] === strs[j][i]) isPrefix = true
      else return res

    }
    if(isPrefix) res = res + strs[0][i]
  }  
  return res
};

// var longestCommonPrefix = function(strs) {
//   let prefix= strs[0]
//  for(let i=1; i<strs.length; i++){
//      while(strs[i].indexOf(prefix) !==0){
//          prefix= prefix.substring(0, prefix.length-1)
//      }
//  }
//  return prefix

// };

c({res: longestCommonPrefix(["a"])})