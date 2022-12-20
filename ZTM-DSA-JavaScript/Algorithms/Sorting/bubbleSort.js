const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// MY SOLUTION
// function bubbleSort(array) {
//   let counter = 0
//   for(let i = 0; i < array.length; i++) {
//     let current = array[i]
//     if(current > array[i + 1]) {
//       array[i] = array[i + 1]
//       array[i + 1] = current
//       counter++
//     }
//   }  
//   if(counter === 0) {
//     return array
//   }
//   return bubbleSort(array)
// }

// ANDREI'S SOLUTION
function bubbleSort(array) {
  const length = array.length
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);