const { c } = require('../../helper/consoleLogHelper')

// given a non-empty array of integers, find the one element that is unique IN LINEAR TIME and using only constant additional space

// given the constraints, we can't use a set. We can't sort the array then iterate.

// the apparent solution is the use the Bitwise XOR operator. Gimmicky answer. Using the XOR operator (^) compares the binary of the two numbers and identical numbers cancel out, leaving only the unique number behind.

var singleNumber = function(nums) {
    result = 0
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
};