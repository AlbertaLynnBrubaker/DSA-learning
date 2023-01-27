

const nums1 = [7,7,7,7]

var smallerNumbersThanCurrent = function(nums) {
  const map = new Map

  const sorted = [...nums].sort((a,b) => a - b)

  sorted.forEach((num, i) => map.has(num) ? null : map.set(num, i)
  )

  return nums.map( ele => map.get(ele) )
};

c({res: smallerNumbersThanCurrent(nums1)})