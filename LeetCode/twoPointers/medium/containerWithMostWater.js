

// start with two pointers at either end of the array. Calculate the area by multiplying right - left ((the width of the container)) * Math.min(height[left], height[right]) ((the height of the lowest side indicating max fill)). Move the shorter pointer one step closer while left < right. Keep a variable (largestContainer) to track largest area.

var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let largestContainer = 0

    while(left < right) {
        let container = (right - left)*(Math.min(height[left], height[right]))
        if(container > largestContainer) largestContainer = container
        if(height[left] > height[right]) right--
        else left++
    }
    
    return largestContainer
};

c({res: maxArea([1,8,6,2,5,4,8,3,7])})