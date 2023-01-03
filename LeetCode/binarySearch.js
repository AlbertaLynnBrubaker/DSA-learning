var search = function(nums, target) {
  let bottomIndex  = 0
  let topIndex = nums.length-1
  while(bottomIndex <= topIndex) {
    let middleIndex  = Math.floor((topIndex+bottomIndex)/2)
    if(nums[middleIndex] === target) {
      return middleIndex
    }
    if(nums[middleIndex] < target) {
      bottomIndex = middleIndex + 1
    } else {
      topIndex = middleIndex - 1
    }
  }
  return -1
};

console.log(search([-1,0,3,5,9,12], -1))

