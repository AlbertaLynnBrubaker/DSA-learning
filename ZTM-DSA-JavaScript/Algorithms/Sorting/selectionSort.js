const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// MY SOLUTION --> did not function properly
// function selectionSort(array) {
//   const length = array.length
//   for(let i = 0; i < length; i++) {
//     let smallest = array[i]
//     let smallIndex = 0
//     for(let j = i + 1; j < length; j++) {      
//       if(smallest > array[j]) {
//         smallest = array[j]
//         smallIndex = j
//       }      
//     }
//     array[smallIndex] = array[i]
//     array[i] = smallest
//   }
// }

// ANDREI'S SOLUTION
function selectionSort(array) {
    const length = array.length
    for(let i = 0; i < length; i++) {
      let min = i
      let temp = array[i]
      for(let j = i + 1; j < length; j++) {
        if(array[j] < array[min]) {
          min = j
        }
      }
      array[i] = array[min]
      array[min] = temp
    }
  }

selectionSort(numbers);
console.log(numbers);