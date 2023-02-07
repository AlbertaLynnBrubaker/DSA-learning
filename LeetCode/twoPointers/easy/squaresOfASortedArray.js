

// MY SOLUTION WORKED but Big O was not great
// var sortedSquares = function(nums) {
//   // get sqares array
//   for(let i = 0; i < nums.length; i++) {
//     nums[i] = Math.pow(nums[i], 2)
//   }
//   return mergeSort(nums)
// }

// function mergeSort (array) {
//   // base case
//   if(array.length === 1) return array

//   const length = array.length
//   const mid = Math.floor(length/2)
//   const left = array.slice(0, mid)
//   const right = array.slice(mid)

//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge (left, right) {
//   c({left, right})
//   const results = []
//   let leftIdx = 0
//   let rightIdx = 0
//   while(leftIdx < left.length && rightIdx < right.length) {
//     if(left[leftIdx] < right[rightIdx]) {
//       results.push(left[leftIdx])
//       leftIdx++
//     } else {
//       results.push(right[rightIdx])
//       rightIdx++
//     }
//   }
//   return results.concat(left.slice(leftIdx).concat(right.slice(rightIdx)))
// }

var sortedSquares = function(nums) {
  const len = nums.length
  let left = 0
  let right = len - 1
  const results = new Array(len)

  for(let i = len - 1; i >= 0; i--) {
    if(Math.abs(nums[left]) > Math.abs(nums[right])) {
      results[i] = Math.pow(nums[left], 2)
      left++
    } else {
      results[i] = Math.pow(nums[right], 2)
      right--
    }
  }
  return results
}
c({res: sortedSquares([-4,-1,0,3,10])})