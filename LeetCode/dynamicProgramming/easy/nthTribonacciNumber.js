

// really, this is the same problem as fibonacci. The only exception is that you can't use Binet's Formula to get an O(1) time complexity.

// two approaches: iterative or recursive

// with the recursive approach, implementing memoization would be the most interesting approach to demonstrate skills


// Iterative
// var tribonacci = function(n) {
//     const trib = [0,1,1]

//     for(let i = 3; i <= n; i++) {
//         trib.push(trib[i - 3] + trib[i - 2] + trib[i - 1])
//     }

//     return trib[n]
// };

// Recursive without memoization
// var tribonacci = function(n) {
//     if(n < 2) return n
//     if(n === 2) return 1
//     return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
// }

// Recursive with memoization but bulky
// var tribonacci = function(n) {
//     const cache = {}

//     const trib = (n) => {
//         if(cache[n]) return cache[n]
//         else {
//             if(n < 2) {
//                 cache[n] = n
//                 return n
//             }
//             if(n === 2) {
//                 cache[n] = 1
//                 return 1
//             }
//             cache[n] = trib(n - 3) + trib(n - 2) + trib(n - 1)
//             return cache[n]
//         }
//     }
//     return trib(n)
// }

// Recursive with memo refactored
var tribonacci = function(n) {
    cache = {0:0,1:1,2:1}

    const trib = (n) => {
        if(cache[n] === undefined) cache[n] = trib(n - 1) + trib(n - 2) + trib(n - 3)
        return cache[n]
    }
    return trib(n)
}

c({result : tribonacci(32)})