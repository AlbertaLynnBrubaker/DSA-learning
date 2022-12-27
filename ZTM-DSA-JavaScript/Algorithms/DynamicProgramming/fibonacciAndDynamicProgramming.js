// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

let calculations = 0
// // MY SOLUTION
// function fibonacci(n) {
//   if(n < 2) {
//     return n
//   }
//   return memFib(n-1) + memFib(n-2)
// }

// function memoizedFib() {
//   let cache = {}
//   return function (n) {
//     calculations++
//     if(n in cache) { 
//       return cache[n]
//     } else {
//       cache[n] = fibonacci(n)
//       return cache[n]
//     }
//   }  
// }

// const memFib = memoizedFib()

// // I want each time the fibonacci function is called to check to see if that fibonacci of n has been called already and to use the stored value if it has

// console.log(fibonacci(100))
// console.log('we did ' + calculations + ' calculations')

// ANDREI'S SOLUTION
function fibonacciMain() {
  let cache = {}
  return function fib(n) {
    calculations++
    if(n in cache) {
      return cache[n]
    } else {
      if(n < 2) {
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibonacciMain()

console.log('dp', fasterFib(12))
console.log('we did ' + calculations + ' calculations')

// My solution did one less calculation that Andrei's but his code is so much cleaner that it isn't worth the mess that mine is.

// BOTTOM UP APPROACH

let calculations2 = 0
function fibonacciMain2(n) {
  let answer = [0, 1]
  for(let i = 2; i <= n; i++) {
    calculations2++
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()
}

console.log('dp2', fibonacciMain2(12))
console.log('we did ' + calculations2 + ' calculations')