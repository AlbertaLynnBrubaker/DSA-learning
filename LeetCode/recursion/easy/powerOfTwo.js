const { c } = require('../../helper/consoleLogHelper')

var isPowerOfTwo = function(n) {
  while(n > 1) {
    n /= 2
  }
  return n > 0 && n % 1 === 0 ? true : false
};

c({res: isPowerOfTwo(1)})