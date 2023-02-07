

// var sortArrayByParity = function(nums) {
//   // two pointers
//   // compare numbers. If both even left++. If both odd right--. If right is even and left is odd, swap and left++ right--
//   let left = 0
//   let right = nums.length - 1

//   while(left <= right) {
//     if(nums[left] % 2 === 1 && nums[right] % 2 === 0) {
//       let temp = nums[left]
//       nums[left] = nums[right]
//       nums[right] = temp
//       left++
//       right--
//     } else if(nums[left] % 2 === 1) {
//       right--
//     } else {
//       left++
//     }
//   }
//   return nums
// };

var sortArrayByParity = function(nums) {
  const evens = []
  const odds = []

  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] % 2 === 0) evens.push(nums.pop())
    else odds.push(nums.pop())
  }

  return nums = evens.concat(odds)
}
c({res: sortArrayByParity([1,2,3,4,5,6,7]) })