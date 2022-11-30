// see if target number exists in a sortedNums array

const binarySearch = (target, sortedNums) => {

  // floor and ceiling are the indices to the left and right of the first and last indices of the sortedNums array. So not 0 and sortedNums.length - 1 BUT -1 and sortedNums.length
  let floorIndex = -1
  let ceilingIndex = sortedNums.length

  // if we hit our floor or ceiling and haven't hit our number, we know that sortedNums does not include the target. We can continue the iteration of the binarySearch by running a while loop
  while(floorIndex + 1 < ceilingIndex) {

    const distance = ceilingIndex - floorIndex
    const halfDistance = Math.floor(distance/2) // round down to be sure we don't get a half index
    const guessIndex = floorIndex + halfDistance

    const guessValue = sortedNums[guessIndex]

    if (guessValue === target) {
      // if our while loop does hit our target then it is in the sortedNums array
      return true
    }

    if(guessValue > target) {
      // if our guess is higher than the target still, that means our target is still to the left of the center
      ceilingIndex = guessIndex
    } else {
      // if our guess is lower than the target, that means our target is to the right of center
      floorIndex = guessIndex
    }
  }

  // if our while loop does not hit a match, our target is not in our sortedNums array
  return false
}


