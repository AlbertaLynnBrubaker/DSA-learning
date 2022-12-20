const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// MY ATTEMPT ---> does not run
// function quickSort(array, compareIndex, pivotIndex){
//   let leftArray = []
//   let rightArray = []
//   if (array.length === 1) {
//     return array
//   }
//   while(!(array[pivotIndex] >= array[pivotIndex - 1] && array[pivotIndex] < array[pivotIndex + 1])) {

//   }

//   if(leftArray.length) {
//     return quickSort(leftArray, leftArray[0], leftArray[leftArray.length - 1])
//   }
//   if(rightArray.length) {
//     return quickSort(rightArray, rightArray[0], rightArray[rightArray.length - 1])
//   }
// }

// ANDREI'S QUICKSORT
function quickSort(array, left, right) {
  const length = array.length
  let pivot
  let partitionIndex

  if(left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)
    quickSort(array, left, partitionIndex -1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
  
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex  
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);