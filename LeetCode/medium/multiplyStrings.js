

// var multiply = function(num1, num2) {
//   let product = 0
//   for(let i = num1.length - 1; i >= 0; i--) {
//     for(let j = num2.length - 1; j >= 0; j--) {
//       let m = num1.length - 1 - i 
//       let n = num2.length - 1 - j
//       product = product + (num1[i] * Math.pow(10, m))  * (num2[j] * Math.pow(10, n)) 
//     }
//   }
//   return product.toString()
// };

var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
 
  const nums = new Array(num1.length + num2.length).fill(0)

  for(let i = num1.length - 1; i >= 0; i--) {
    for(let j = num2.length - 1; j >= 0; j--) {
      let firstIndex = i + j
      let secondIndex = i + j + 1
      let sum = nums[secondIndex] + num1[i] * num2[j]
      nums[secondIndex] = sum % 10
      nums[firstIndex] += Math.floor(sum/10)
    }
  }
  if (nums[0] === 0) nums.shift()
  return nums.join('')

}

c({res: multiply("123", "456")})