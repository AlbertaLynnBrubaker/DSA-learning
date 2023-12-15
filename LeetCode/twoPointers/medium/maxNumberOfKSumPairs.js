const { c } = require('../../helper/consoleLogHelper')

const nums = [1,2,3,4], k = 5

// two pointers
// var maxOperations = function(nums, k) {
//     nums.sort((a, b) => a - b)
//     let operations = 0
//     let left = 0
//     let right = nums.length - 1

//     while(left < right) {
//         let sum = nums[left] + nums[right]
//         if(sum === k) {
//             operations++
//             left++
//             right--
//         } else if(sum > k) right--
//         else left++
//     }

//     return operations
// };

// map approach
var maxOperations = function(nums, k) {
    const map = {}
    let operations = 0

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]){
            map[nums[i]]--
            if(map[k - nums[i]]) {
                map[k - nums[i]]--
                operations++
            } else {
                map[nums[i]]++
            }
        }
    }
    return operations
}

// var maxOperations = function(nums, k) {
//     const map = {}
//     let operations = 0

//     for (let i = 0; i < nums.length; i++) {
//         const diff = k - nums[i]

//         if(!map[diff]) {
//             map[nums[i]] = (map[nums[i]] || 0) + 1
//             continue
//         }

//         map[diff]--

//         if(!map[diff]) delete map[diff]
//         operations++
//     }
//     return operations
// }

c({res: maxOperations(nums, k)})