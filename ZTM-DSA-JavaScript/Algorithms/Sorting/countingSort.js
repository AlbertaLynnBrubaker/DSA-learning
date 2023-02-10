const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const array2 = []
for(let a = 0; a < 2000; a++) {
  array2.push(Math.floor(Math.random() * 100))
}
console.log(array2)

// MY SOLUTION --> O(4n)
function countingSort(aArray) {
  const cArray = []
  const bArray = []

  let highestValue = 0

  for(let i = 0; i < aArray.length; i++) {
    if(aArray[i] > highestValue) {
      highestValue = aArray[i]
    }
  }
  for(let j = 0; j <= highestValue; j++) {
    cArray.push(0)
  }

  for(let k = 0; k < aArray.length; k++) {
    cArray[aArray[k]]++
  }
  let emptyIndex = 0
  for(let m = 0; m < aArray.length; m++) {
    if(cArray[emptyIndex] > 0) {
      bArray.push(emptyIndex)
      cArray[emptyIndex]--
    } else {
      emptyIndex++
      m--
    }
  }
  return bArray
}

console.log(countingSort(array2))


// STACKOVERFLOW SOLUTION
// function countingSort(arr){
//   const helper = []; // This helper will note how many times each number appeared in the arr
//                    // Since JS arrary is an object and elements are not continuously stored, helper's Space Complexity minor that n
//   for(let i = 0; i<arr.length; i++){
//     if(!helper[arr[i]]){
//         helper[arr[i]] = 1;
//     }else{
//         helper[arr[i]] += 1;
//     }
//   }

//   const newArr = []; 
//   for(i in helper){
//     while(helper[i]>0){
//         newArr.push(parseInt(i));
//         helper[i]--;
//     }
//   }
//   return newArr; 
// }

// console.log(countingSort(array2)); // [0, 1, 2, 3, 4, 5]

// Performance test to 100k operations and the time is competetive with the StackOverflow operation