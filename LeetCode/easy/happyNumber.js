
var isHappy = function(n) {
  const set = new Set()  
  
  while(n !== 1) {
    if(set.has(n)) return false
    set.add(n)

    let digitsArray = n.toString().split('')
    let sum = 0
    digitsArray.forEach(digit => sum = sum +  Math.pow(Number(digit), 2))
    n = sum
  }
  return true
};

// Neat little solution
// var isHappy = function(n) {
//   while (n !== 1) {
//   n = [...String(n)].reduce((sum, digit) => sum + digit ** 2, 0);
//   if (n == 4) return false;
// }
// return true;
// };

c({res: isHappy(19)})

// Define whether or not a number 'n' is happy

// A happy number takes each digit of the input, squares it and then adds them together. It repeats this until the result is 1 which returns true, or it begins to loop which returns false.

// UNNECESSARY -> create a linked list that stores the output and next node. Iterate until the result has existed already. Then confirm that the linked list is a cycle, if it is then return false. If it is not a cycle, keep iterating on the list until the next repeat. Return true if any result equals 1.

// we don't need a linked list. All we need to do is store the results at each iteration in a Set and then test against the existence of that result on the next iteration. If Set.has(result) === true, then return false. If any result equals 1 return true.
