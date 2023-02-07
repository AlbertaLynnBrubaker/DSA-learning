

var intersection = function(nums1, nums2) {
  const set = new Set(nums1)
  const intersection = []

  for(let j = 0; j < nums2.length; j++) {
    if(set.has(nums2[j])) {
      intersection.push(nums2[j])
      set.delete(nums2[j])
    } 
  }
  return intersection
};

c({res: intersection([1,2,2,1], [2,2])})