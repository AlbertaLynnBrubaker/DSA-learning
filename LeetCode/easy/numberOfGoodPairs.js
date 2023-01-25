const { c } = require('../helper/consoleLogHelper')

const nums1 = [1,1,1,1]

var numIdenticalPairs = function(nums) {
  const map = {}
  let goodPairs = 0

  for(let num of nums) {
    map[num] = (map[num] || 0) + 1
  }

  for(key in map) {
    goodPairs += (map[key]*(map[key] - 1))/2
  }

  return goodPairs
};

c({res: numIdenticalPairs(nums1)})