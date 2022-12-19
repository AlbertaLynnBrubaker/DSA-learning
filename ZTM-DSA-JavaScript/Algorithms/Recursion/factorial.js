// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {  
  if(number === 2 || number === -2) {
    return 2
  }
  if(number < 0) {
    return number * findFactorialRecursive(number + 1)
  }
  return number * findFactorialRecursive(number - 1)
}

let result = 1

function findFactorialIterative(number) {
  while(number > 0) {
    result = result * number
    number--
  }
  while (number < 0) {
    result = result * number
    number++
  }
  return result;
}

console.log(findFactorialRecursive(-5))
console.log(findFactorialIterative(5))
