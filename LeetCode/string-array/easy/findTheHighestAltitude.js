const gains = []

//

var largestAltitude = function(gain) {
    let relHigh = 0
    let current = 0
    for(let i = 0; i < gain.length; i++){
        current = current + gain[i]
        if(current > relHigh) relHigh = current
    }
    return relHigh
};

console.log(largestAltitude(gains))