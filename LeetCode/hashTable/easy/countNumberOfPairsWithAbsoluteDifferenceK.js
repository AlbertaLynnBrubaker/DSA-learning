

const nums1 = [3,2,1,5,4]

var countKDifference = function(nums, k) {
  const map = {}
  let count = 0

  for(let num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1
  }

  while(nums.length) {
    let key = nums.pop()
    map[key]--
    if(map[key] === 0) delete map[key]
    let plus = key + k
    let minus = key - k
    if(map[plus]) count += map[plus]
    if(map[minus]) count += map[minus]
  }

  return count
};

c({res: countKDifference(nums1, 2)})