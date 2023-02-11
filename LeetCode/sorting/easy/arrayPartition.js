const { c } = require('../../helper/consoleLogHelper')

var arrayPairSum = function(nums) {
  // Counting Sort

  const n = 10000 // the max value for the problem
  const countArray = new Array(n * 2 + 1).fill(0)
  for(let num of nums) {
    ++countArray[num + n]
  }

  let countPairs = 0
  let totalPairs = Math.floor(nums.length / 2)
  let remainder = 0

  for(let i = 0; i < countArray.length && totalPairs > 0; ++i) {
    countArray[i] -= remainder
    if(countArray[i] === 0) {
      remainder = 0
      continue
    }

    if(countArray[i] > 0) {
      countPairs += Math.floor((countArray[i] + 1) / 2) * (i - n)
      totalPairs -= Math.floor((countArray[i] + 1) / 2)
      remainder = Math.max(countArray[i], 0) % 2
    }
  }
  return countPairs
};


c({res: arrayPairSum([6,2,6,5,1,2])})