// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
  const fib = [0, 1]

  for(let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib[n]
}
console.log(fibonacciIterative(8));


// ANDREI'S RECURSION SOLUTION - I couldn't crack it
function fibonacciRecursive(n) {
  if(n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
} // O(2^n) --> exponential time. For each element in the sequence we have an exponential increase in recursive function calls

console.log(fibonacciRecursive(12))

// There are times when recursion can keep your code DRY and potentially allow your code to be easier to understand.
// HOWEVER, recursion will add to memory for every function call in the call stack