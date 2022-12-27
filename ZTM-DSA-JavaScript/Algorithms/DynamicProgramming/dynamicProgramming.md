# Dynamic Programming

Dynamic Programming is just a buzzword. A bit of computer science jargon.

What it really means in practical terms is all about caching data to optimize performance.

## Memoization

```
function addTo80(n) {
  console.log("pretend I'm taking a long time")
  return n + 80
}

addTo80(5)
addTo80(5)
addTo80(5)
```

We see that each time we call addTo80() we are taking a "long time." But we can create a different version of the function that stores the return value of the first funciton in a cache object.

```
function addTo80(n) {
  console.log("pretend I'm taking a long time")
  return n + 80
}

let cache = {}
function memoizedAddTo80(n) {
  if(n in cache) { // works like cache.n to check if a property exists
    return cache[n]
  } else {    
    cache[n] = addTo80(n)
    return cache[n]
  }
}

memoizedAddTo80(5)
memoizedAddTo80(5)
memoizedAddTo80(5) // our console.log only runs once because we have cached the answer from our else statement in an object and simply referenced it instead.
```

Memoization is a specific form of caching that involves caching the return value of a function based on its parameters and if the parameter doesn't change it will return the cached version of the function at O(1). This is especially useful for a function that has the same expected input and one that is called on a lot. Imagine a search for the same input over and over but because of the nature of the data, the time complexity is O(n^2). If you store that value using memoization, you can significantly speed up the runtime of your program without a massive hit to memory use.

## Closures

Rather than storing the cache object outside the function in the global or higher-order scope, we use something in JavaScript called Closures. A closure is an anonymous function that is the return value of the higher order function but allows us to use the cache object like we did when it was in the global scope. All the operations inside the memoizedAddTo80() above go into the closure.

```
function addTo80(n) {
  console.log("pretend I'm taking a long time")
  return n + 80
}


function memoizedAddTo80() {
  let cache = {}
  return function (n) { // this is a closure. a returned anon function that contains the operations of our memoizedAddTo80 from before. It allows us to use cache as if memoizedAddTo80 was the global scope
    if(n in cache) { 
      return cache[n]
    } else {    
      cache[n] = addTo80(n)
      return cache[n]
    }
  }  
}

const memoized = memoizedAddTo80()

memoized(5)
memoized(5)
memoized(5) 
```

We save the parent function into a variable and then call the variable with our input. In this way, we tightly pack the functions while saving on the time complexity. Our time savings are geometric the more this function call goes out with the same input without increasing the memory use beyond the initial cached object.

## Using Dynamic Programming

You can think of dynamic programming as divide and conquer plus memoization. It really is an optimization step to reduce the time and space complexity.