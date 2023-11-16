const arra = [1,2,2,1,1,3]

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var uniqueOccurrences = function(arr) {
//     const hashMap = {}
//     for(let i = 0; i < arr.length; i++) {
//         if(hashMap[arr[i]]) hashMap[arr[i]] = hashMap[arr[i]] + 1
//         else hashMap[arr[i]] = 1
//     }

//     const set = new Set()

//     for(key in hashMap) {
//         if(set.has(hashMap[key])) return false
//         set.add(hashMap[key])
//     }
//     return true

// };

var uniqueOccurrences = function(arr) {
    const occurances = {}
    for(const num of arr){
        (occurances[num] ? occurances[num] += 1 : occurances[num] = 1)
    }
    const occurSet = new Set(Object.values(occurances))
    return occurSet.size === Object.keys(occurances).length

};