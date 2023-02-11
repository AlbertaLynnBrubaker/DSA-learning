const { c } = require('../../helper/consoleLogHelper')

var targetIndices = function(nums, target) {
  let lows = 0
  let numOfTargets = 0
  for(let num of nums) {
    if(num < target) lows++
    if(num === target) numOfTargets++
  }
  const results = []
  if(numOfTargets) {
    for(let i = 0; i < numOfTargets; i++) {
      results.push(lows + i)
    }
  }
  return results
};

c({res: targetIndices([1,2,5,2,3], 2)})