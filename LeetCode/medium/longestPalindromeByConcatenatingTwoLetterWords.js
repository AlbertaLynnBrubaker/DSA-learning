const words1 = ["lc","cl","gg"]
const words2 = ["ab","ty","yt","lc","cl","ab"]
const words3 = ["cc","ll","xx"]
const words4 = ["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]

var longestPalindrome = function(words) {
  const nonDouble = new Map()
  const double = new Map()
  let res = ""

  for(element of words) {
    let mirror = element[1] + element[0]
    if(element === mirror) {
      addToMap(double, element)
    } else {
      addToMap(nonDouble, element)
    }    
  }

  
  let firstDouble = true
  for(element of words) {
    let mirror = element[1] + element[0]
    if(double.has(element) && double.get(element) > 0) {
      if(double.get(element) === 1 && firstDouble) {
        firstDouble = false
        double.set(element, double.get(element) - 1)
        let mid = Math.floor(res.length/2)
        let h1 = res.slice(0, mid)
        let h2 = res.slice(mid)
        res = h1 + element + h2
      } else if(double.get(element) > 1) {
        double.set(element, double.get(element) - 2)
        res = element + res + element
      }
    } else if(nonDouble.has(mirror) && nonDouble.get(element) > 0 && nonDouble.get(mirror) > 0){
      nonDouble.set(element, nonDouble.get(element) - 1)
      nonDouble.set(mirror, nonDouble.get(mirror) - 1)
      res = element + res + mirror
    }    
  }
  return res.length
};

const addToMap = function(hash, element) {
  if(!hash.get(element)) hash.set(element, 1)
  else hash.set(element, hash.get(element) + 1)
  return hash
}

c({res: longestPalindrome(words3)})