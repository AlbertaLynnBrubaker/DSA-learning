

// sort the potions array. Use a binary search on it... if the product of the middle value is higher than the success value, search the low half. If the new product is still higher than the success value, search the low half again.

const sp = [15,8,19], po = [38,36,23], su = 328

var successfulPairs = function(spells, potions, success) {
    potions = potions.sort((a, b) => a - b)
    const results = []

    // iterate through spells
    for(let spell of spells) {
        // for each spell we are going to run a binary search as above
        let left = 0
        let right = potions.length - 1
        let mid
        let lowestSuccessful = potions.length
        
        while(left <= right) {
            mid = Math.floor((left + right)/2)
            if(potions[mid] * spell >= success) {
                right = mid - 1
                lowestSuccessful = mid
            } else {
                left = mid + 1
            }
        }

        c({lowestSuccessful, mid})
        // lowestSuccesful tracks the index of the lowest successful pair. Sub from potions.length for value to push into results
        results.push(potions.length - lowestSuccessful)
    }
    return results
};

c({res: successfulPairs(sp, po, su)})