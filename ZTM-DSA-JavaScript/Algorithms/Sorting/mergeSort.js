const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// MY ANSWER --> did need a little help
// function mergeSort (array) {
//   if (array.length === 1) {
//     return array
//   }
//   // Split Array in into right and left
//   const left = array.slice(0, Math.floor(array.length/2))
//   const right = array.slice(Math.floor(array.length/2), array.length)

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }

// function merge(left, right){
//   const sortedArray = []
//   let currentLeftIndex = 0
//   let currentRightIndex = 0
//   while(sortedArray.length < left.length + right.length) {
//     if(currentLeftIndex < left.length && (right.length === currentRightIndex || left[currentLeftIndex] < right[currentRightIndex])) {      
//       sortedArray.push(left[currentLeftIndex])
//       currentLeftIndex++
//     } else {    
//       sortedArray.push(right[currentRightIndex])
//       currentRightIndex++
//     }
//   }
//   return sortedArray
// }

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length
  const middle = Math.floor(length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}


const answer = mergeSort(numbers);
console.log(answer);