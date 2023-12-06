

// for each i in an array ans length n + 1, return the number of 1s in the binary corresponding to that i number

// my slow and dirty solution
// var countBits = function(n) {
//     const ans = new Array(n + 1).fill(0)

//     for(let i = 0; i < ans.length; i++) {
//         let num = i
//         let count = 0
//         while(num > 0) {
//             count += num%2
//             num = Math.floor(num/2)
//         }
//         ans[i] = count
//     }
//     return ans
// };

// another cleaner option for n log n
// var countBits = function(n) {
//     let ans = Array(n + 1).fill(0);
//     for (let i = 1; i <= n; ++i) {
//         if (i%2 === 0) {
//             ans[i] = ans[i / 2];
//         } else {
//             ans[i] = ans[(i - 1) / 2] + 1;
//         }
//     }
//     return ans;
// };

// the O(n) solution using the rightshift operator and the binary & operator
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  // using rightshift operator and binary & operator
    ans[i] = ans[i >> 1] + (i & 1);
}
return ans;
};

c({res: countBits(7)})

// 0 -> 0 -> 2^0 - 1 -> 0
// 1 -> 1 -> 2^0     -> 1
// 2 -> 1 -> 2^1 - 1 -> 10
// 3 -> 2 -> 2^1     -> 11
// 4 -> 1 -> 2^2 - 3 -> 100
// 5 -> 2 -> 2^2 - 2 -> 101
// 6 -> 2 -> 2^2 - 2 -> 110
// 7 -> 3 -> 2^2 - 1 -> 111
// 8 -> 1 -> 2^3 - 7 -> 1000
// 9 -> 2 -> 2^3 - 6 -> 1001
// 10-> 2 -> 2^3 - 6 -> 1010
// 11-> 3 -> 2^3 - 5 -> 1011
// 12-> 2 -> 2^3 - 6 -> 1100
// 13-> 3 -> 2^3 - 5 -> 1101
// 14-> 3 -> 2^3 - 5 -> 1110
// 15-> 4 -> 2^3 - 4 -> 1111
// 16-> 1 -> 2^4 - 15-> 10000