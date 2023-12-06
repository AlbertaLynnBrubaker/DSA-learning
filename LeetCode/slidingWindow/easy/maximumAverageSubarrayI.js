

// run a loop that takes a slice from the start index to the k value. The loop ends when the window hits the i + k. In the loop, reduce the slice to find the mean then divide by k. Return the best result.

const nums = [-1], k = 1

// time limit exceeded
// var findMaxAverage = function(nums, k) {
//     let largestAverage

//     for(let i = 0; i + k <= nums.length; i++) {
//         const initial = 0
//         const average = (nums.slice(i, i + k).reduce((acc, curr) => acc + curr, initial))/k
//         if(average > largestAverage || !largestAverage) largestAverage = average
//     }
//     return largestAverage
// };

// 

var findMaxAverage = function(nums, k) {
    let windowValue = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    let largestAverage = windowValue/k

    for(let i = 1; i + k <= nums.length; i++) {
        windowValue = windowValue - nums[i - 1] + nums[i + k - 1]
        windowValue/k > largestAverage ? largestAverage = windowValue/k : largestAverage
    }
    return largestAverage
};

// var findMaxAverage = function(nums, k) {
//     let sum = 0;
//     for (let i = 0; i <= k-1; i++) sum  += nums[i];
//     let max = sum;
//     for (let i = k; i <= nums.length-1; i++) {
//         sum += nums[i];
//         sum -= nums[i-k];
//         max = Math.max(sum, max);
//     }
//     return max/k;
// };


c({res: findMaxAverage(nums, k)})