const { c } = require('../../helper/consoleLogHelper')

var minimumSum = function(num) {
  num = num.toString().split('')
  num = num.sort((a,b) => a - b)
  
  return parseInt(num[0] + num[2]) + parseInt(num[1] + num[3])
};

c({res: minimumSum(4009)})