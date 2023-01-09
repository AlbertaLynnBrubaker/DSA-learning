const { c } = require('./helper/consoleLogHelper')

var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) return [map.get(target - nums[i]), i]
    map.set(nums[i], i)
  }
}

console.log(twoSum([3, 2, 4], 6))