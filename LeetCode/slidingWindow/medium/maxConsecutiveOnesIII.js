

// start with a left and right pointer. Count up as you move right IF the number is a 1. If it is not, subtract one from k and move right pointer. If k === 0, then the left pointer moves from the last leftmost 0 and adds one to k.
const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

var longestOnes = function(nums, k) {
    let count = 0
    let left = 0
    let right = 0
    let longest = 0

    while(right <= nums.length - 1) {
        if(nums[right] === 1) {
            // add to count, add to right
            count++
            right++
        }else {
            if(k) {
                // add to count, add to right, sub from k
                count++
                right++
                k--
            } else {
                if(nums[left] === 1) {
                    count--
                    left++
                } else {
                    count--
                    left++
                    k++
                }
            }
        }
        if(longest < count) longest = count
    }
    return longest
};

// var longestOnes = function(nums, k) {
//     let left = 0;
//     let right = 0;
//     for (right = 0; right < nums.length; right++) {
//         k -= 1 - nums[right];
//         if (k < 0) {
//             k += 1 - nums[left];
//             left += 1;
//         }
//     }
//     return (right - left);
// };

c({res: longestOnes(nums, k)})
