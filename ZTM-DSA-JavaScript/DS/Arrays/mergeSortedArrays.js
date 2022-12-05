// Given two sorted arrays, can you merge the two into one sorted array
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
  // => [0, 3, 4, 4, 6, 30, 31]

// MY SOLUTION

function mergeSortedArrays(array1, array2) {
  // ask interviewer if each input can be assumed to be an array and assume to be sorted

  // const mergedArray = []
  // BRUTE FORCE/NAIVE => O(n^2)
  // for(let i = 0; i < array1.length; i++) {
  //   for(let j = 0; j < array2.length; j++) {
  //     if(array1[i] > array2[j]) {
  //       mergedArray.push(array2[j])
  //     }
  //   }
  //   mergedArray.push(array1[i])
  // }

  // BETTER ? => O(n log(n))
  const mergedArray = array1.concat(array2)
  mergedArray.sort((a, b) => a - b)

  
  return mergedArray
}


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))

// ANDREI'S SOLTUION

function mergeSortedArrays2(array1, array2) {
  const mergedArray2 = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1
  let j = 1

  // Check input
  if(array1.length === 0) {
    return array2
  } 
  if(array2.length === 0) {
    return array1
  }

  while(array1Item || array2Item) {
    // without !array2Item we had an infinite loop
    if(!array2Item || array1Item < array2Item) {
      mergedArray2.push(array1Item)
      array1Item = array1[i]
      i++
    } else {
      mergedArray2.push(array2Item)
      array2Item = array2[j]
      j++
    }
  } // should clean up this code by extracting each conditionals return value into its own function 
  
  return mergedArray2
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]))