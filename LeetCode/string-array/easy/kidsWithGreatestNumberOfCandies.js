const candies1 = [4,2,1,1,2], extraCandies1 = 1

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let most = Math.max(...candies)
    const result = []

    for(let kid of candies) {
        result.push(!!((kid  + extraCandies) >= most))
    }
    return result
};

console.log(kidsWithCandies(candies1, extraCandies1))
