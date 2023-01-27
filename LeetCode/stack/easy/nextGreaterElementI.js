const { c } = require('../../helper/consoleLogHelper')

// var nextGreaterElement = function(nums1, nums2) {
//   return results = nums1.map(num => {
//     let k = 0
//     let j = k + 1
//     while(j < nums2.length) {
//       if(nums2[k] !== num) {
//         k++
//         j++
//       } else {
//         if(nums2[j] > num) return nums2[j]
//         else j++
//       }
//     }
//     return -1
//   })
// };

var nextGreaterElement = function(nums1, nums2) {
  const stack = []
  const greater = {}
  for(let num of nums2) {
    while(stack.length && num > stack[stack.length - 1]) {
      let current = stack.pop()
      greater[current] = num
    }
    stack.push(num)
    greater[num] = -1
  }
  return nums1.map(num => greater[num])
}


c({res: nextGreaterElement([2,4], [1,2,3,4])})
