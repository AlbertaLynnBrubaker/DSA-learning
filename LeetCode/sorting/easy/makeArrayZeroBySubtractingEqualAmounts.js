const { c } = require('../../helper/consoleLogHelper')

var minimumOperations = function(nums) {
  const set = new Set([...nums, 0])
  return set.size - 1
};

c({res: minimumOperations([1,5,0,3,5])})