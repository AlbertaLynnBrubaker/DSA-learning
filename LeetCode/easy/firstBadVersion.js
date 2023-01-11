const isBadVersion = (version) => {
  let firstBad = 21
  if(version >= firstBad) {
    return true
  }
  return false
}


// var solution = function(isBadVersion) {  
//   return function(n) {
//     let low = 1
//     let high = n
    
//     while(low <= high) {
//       mid = Math.floor((high + low)/2)
//       console.log(isBadVersion(mid))
//       if(isBadVersion(mid) === false) {
//         low = mid + 1
//       } else {
//         high = mid - 1
//       }
//     }
    
//   };
// };

var solution = function(isBadVersion) {  
  return function(n) {
    if(isBadVersion(1)) return 1
    let low = 1
    let high = n    

    while(low <= high) {
      if(isBadVersion(high) === false) {
        return mid
      }
      mid = Math.ceil((high + low)/2)
      if(isBadVersion(mid) === false) {
        low = mid
      } else {
        high = mid - 1
      }
    }
  };
};



console.log(solution(isBadVersion)(25))