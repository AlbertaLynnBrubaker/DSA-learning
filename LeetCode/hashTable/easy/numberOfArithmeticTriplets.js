

const nums1 = [0,1,4,6,7,10]

var arithmeticTriplets = function(nums, diff) {
  const set = new Set(nums)
  let triplets = 0

  for(let value of set) {
    let jValue = value + diff
    let kValue = jValue + diff
    if(set.has(jValue) && set.has(kValue)) triplets++
  }

  return triplets
};



c({res: arithmeticTriplets(nums1, 3)})