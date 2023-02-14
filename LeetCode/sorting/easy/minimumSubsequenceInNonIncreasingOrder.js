const { c } = require('../../helper/consoleLogHelper')

var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a)

  leftSum = 0
  rightSum = nums.reduce((acc, val) => acc + val)
  const ans = []
  for(let i = 0; i < nums.length; i++) {
    leftSum += nums[i]
    rightSum -= nums[i]
    let difference = leftSum - rightSum
    ans.push(nums[i])
    if(difference > 0) break 
  }
  return ans
};

c({res: minSubsequence([8,8])})

// [10,9,8,4,3]