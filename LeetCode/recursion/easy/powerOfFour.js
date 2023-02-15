const { c } = require('../../helper/consoleLogHelper')

var isPowerOfFour = function(n) {
  while(n > 1) n /= 4
  return n > 0 && n % 1 === 0
};

c({res: isPowerOfFour(0)})