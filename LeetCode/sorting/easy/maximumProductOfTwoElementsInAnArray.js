const { c } = require('../../helper/consoleLogHelper')

const nums1 = [3,4,5,2]

var maxProduct = function(nums) {
  let max = Math.max(...nums)
  let index = nums.indexOf(max)
  nums.splice(index, 1)
  let second = Math.max(...nums)

  return (max - 1)*(second - 1)
};

c({res: maxProduct(nums1)})