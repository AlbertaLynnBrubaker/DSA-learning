// see if target number exists in a sortedNums array

const binarySearch = (target, sortedNums) => {

  // floor and ceiling are the indices to the left and right of the first and last indices of the sortedNums array. So not 0 and sortedNums.length - 1 BUT -1 and sortedNums.length
  let floorIndex = -1
  let ceilingIndex = sortedNums.length
  
  while(floorIndex <= ceilingIndex) {
    let mid = Math.floor((ceilingIndex + floorIndex)/2)
    let guess = flat[mid]

    if(guess === target) return true
    else if(guess < target) floorIndex = mid + 1
    else ceilingIndex = mid - 1
  }
  return false
}


