

var search = function(nums, target) {
  let floorIndex = 0
  let ceilingIndex = nums.length - 1

  while(floorIndex <= ceilingIndex) {
    let mid = Math.floor((floorIndex + ceilingIndex)/2)

    if(nums[mid] === target) return mid

    if(nums[floorIndex] <= nums[mid]) {
      if(nums[floorIndex] <= target && target <= nums[mid]) ceilingIndex = mid -1
      else floorIndex = mid + 1
    } else {
      if(nums[mid] <= target && target <= nums[ceilingIndex]) floorIndex = mid + 1
      else ceilingIndex = mid - 1
    }
  }
  return - 1
};