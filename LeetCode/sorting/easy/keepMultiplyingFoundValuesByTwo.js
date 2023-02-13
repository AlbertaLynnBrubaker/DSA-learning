const { c } = require('../../helper/consoleLogHelper')

var findFinalValue = function(nums, original) {
  while(nums.includes(original)) {
    original = original * 2
  }
  return original
};

c({res: findFinalValue([5,3,6,1,12], 3)})