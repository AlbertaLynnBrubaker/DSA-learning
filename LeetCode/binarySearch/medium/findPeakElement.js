const { c } = require('../../helper/consoleLogHelper')

const nums1 = [1,1,1,1,2,1,1]

var findPeakElement = function(nums) {
    if(nums.length === 1) return 0

    const findPeaksRec = function(nums, low, high) {
        let mid = Math.floor((high + low)/2)
        let prev = mid > 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
        let next = mid < nums.length - 1 ? nums[mid + 1] : Number.NEGATIVE_INFINITY;
    
        if(nums[mid] > prev && nums[mid] > next) return mid
    
        if(nums[mid] < next) return findPeaksRec(nums, mid + 1, high)
        else return findPeaksRec(nums, low, mid - 1)
    }
    
    return findPeaksRec(nums, 0, nums.length - 1)
}

// var findPeakElement = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while(left < right) {
//         let mid = Math.floor((left + right)/2);

//         if(nums[mid] > nums[mid + 1]) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// };
c({res: findPeakElement(nums1)})