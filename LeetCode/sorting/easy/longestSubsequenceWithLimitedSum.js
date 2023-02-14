const { c } = require('../../helper/consoleLogHelper')

var answerQueries = function(nums, queries) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i-1]
  }
  return queries.map(query => {
      let left = 0
      let right = nums.length - 1

      while(left <= right) {
          let mid = Math.floor((left + right) / 2)
          if (nums[mid] <= query) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
      return left 
  })
};

c({res: answerQueries([4,5,2,1], [3,10,21])})