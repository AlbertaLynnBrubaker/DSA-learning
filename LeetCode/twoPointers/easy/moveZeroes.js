

var moveZeroes = function(nums) {
  let left = 0
  let right = left + 1

  while(right < nums.length) {
    if(nums[left] !== 0 && nums[right] !== 0) {
      left++
      right++
    } else if(nums[left] === 0 && nums[right] === 0) {
      right++
    } else if(nums[right] === 0) {
      left++
    } else {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    }
  }
};

c({res: moveZeroes([10,1,0,3,12])})