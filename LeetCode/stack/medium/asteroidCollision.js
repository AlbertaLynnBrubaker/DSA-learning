const { c } = require('../../helper/consoleLogHelper')

var asteroidCollision = function(asteroids) {
    const stack = []
    let right = false


    // right is false if the last asteroid in the stack is negative
    for(let a of asteroids) {
        if(right) {
            if(a > 0) {
                //no collision
                stack.push(a)
            } else {
                if(stack[stack.length - 1] > 0) {
                    // collision
                    while(stack.length && stack[stack.length - 1] > 0) {
                        if(Math.abs(a) > stack[stack.length - 1]) {
                            // if the leftmoving asteroid is larger, destroy last asteroid in stack
                            stack.pop()
                            if(!stack.length || stack[stack.length - 1] < 0) {
                                // leftmoving asteroid has collided with all rightmoving asteroids, add to stack
                                stack.push(a)
                                right = false
                            }
                        } else if(Math.abs(a) === stack[stack.length - 1]) {
                            // if the leftmoving asteroid is the same as last in stack, destroy both
                            stack.pop()
                            break
                        } else {
                            // else the last asteroid in the stack is larger, destroy the leftmoving asteroid
                            break
                        }
                    }
                } 
                else {
                    // check to see if the last asteroid in the stack is leftmoving or if stack is empty and add a to stack
                    stack.push(a)
                    right = false
                }
            }
            
        } else {
            if(a > 0) {
                //no collision
                stack.push(a)
                right = true
            } else {
                // no collision
                stack.push(a)
            }
        }
    }

    return stack
};

// best on leetcode - DRYer code than mine. Pop off the stack set to a variable and then put whatever the winner is back in the stack.
// var asteroidCollision = function(asteroids) {
//     const stack = [];
  
//     for (const asteroid of asteroids) {
//       let collision = false;
  
//       while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
//         const prevAsteroid = stack.pop();
  
//         if (Math.abs(asteroid) === prevAsteroid) {
//           collision = true;
//           break; // Both asteroids explode
//         } else if (Math.abs(asteroid) < prevAsteroid) {
//           stack.push(prevAsteroid); // The previous asteroid survives
//           collision = true;
//           break;
//         }
//         // The current asteroid survives, and we continue to check with the next asteroid in the stack.
//       }
  
//       if (!collision) {
//         stack.push(asteroid);
//       }
//     }
  
//     return stack;
// };

c({res: asteroidCollision([-2,1,-1,-2])})