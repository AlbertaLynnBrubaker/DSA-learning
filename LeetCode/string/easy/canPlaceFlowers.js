const test = [1,0,0,0,1]
let num = 1

// iterate through the flowerbed array. if flowerbed[i - 1] === 0, flowerbed[i] === 0, and flowerbed[i + 1] === 0 then n--

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            flowerbed[i] = 1
            n--
        }
        if (n < 1) return true
    }
    return false
};


console.log(canPlaceFlowers(test, num))