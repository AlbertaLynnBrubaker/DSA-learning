const { c } = require('../../helper/consoleLogHelper')

const numArr = [2,2,3,4]

var productExceptSelf = function(nums) {
    const len = nums.length
    const result = new Array(len).fill(1)

    let left = 1
    for (let i = 0; i < len; i++) {
      result[i] = result[i] * left
      left = left * nums[i]
    }
  
    let right = 1
    for (let i = len - 1; i >= 0; i--) {
      result[i] = result[i] * right
      right = right * nums[i]
    }
  
    return result;
  };

c({res: productExceptSelf(numArr)})
