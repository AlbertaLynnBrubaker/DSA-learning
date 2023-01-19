// Iterative

// var fib = function(n) {
//   const array = [0, 1]
//   for(let i = 2; i <= n; i++) {
//     array.push(array[i - 1] + array[i - 2])
//   }
//   return array[n]
// };

// Recursion

// var fib = function(n) {
//   if(n < 2) return n

//   return fib(n - 1) + fib(n - 2)
// }

// My memoized solution

// var fibMemo = function(n) {
//   const cache = {}

//   return fib = function(n) {
//     if(n in cache) {
//       return cache[n]
//     } else {
//       if(n < 2) {
//         return n
//       } else {
//         cache[n] = fib(n - 1) + fib(n - 2)
//       }      
//       return cache[n]
//     }
//   }
// }

// Memoization that works on LeetCode

// const cache = {0: 0, 1: 1}
// const fib = (n) => {
//   if(!cache[n]) {
//     cache[n] = fib(n - 1) + fib(n - 2)
//   }
//   return cache[n]
// }

// FUCKING NEAT MATHY MCMATHFACE SOLUTION

const fib = function (n) {
  const rootOfFive = Math.sqrt(5)
  const phi = (rootOfFive + 1) / 2
  const inversePhi = (rootOfFive - 1) / 2
  const binetsFormula = (phi ** n - (-inversePhi) ** n) / rootOfFive
  // due to decimal limits in computer systems, the decimals are rounded at a certain point. Binet's Formula in its full will take an integer and ALWAYS return another integer... to correct for this, I rounded.
  return Math.round(binetsFormula)
}

console.log(fib(9))