const { c } = require('../../helper/consoleLogHelper')

var heightChecker = function(heights) {
  let count = 0
  // sort heights arr as expected
  const expected = [...heights].sort((a,b) => a - b)
  // iterate through heights and count how many match expected
  for(let i = 0; i < heights.length; i++) {
    if(heights[i] !== expected[i]) count++
  }
  return count
};

c({res: heightChecker([1,1,4,2,1,3])})