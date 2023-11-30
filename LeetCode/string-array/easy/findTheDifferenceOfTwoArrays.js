

const arr1 = [80,5,-20,33,26,29], arr2 = [-69,0,-36,52,-84,-34,-67,-100,80]

// create a result array with two arrays. Each array will contain a list of the numbers in each input array that are not in the other array.

// use a set for each array. As I iterate through, check to see if the number at each index is in the opposite set

var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1), set2 = new Set(nums2)

    for(let n of nums1) {
        if(set2.has(n)){
            set1.delete(n)
            set2.delete(n)
        }
    }

    return [[...set1], [...set2]]
};