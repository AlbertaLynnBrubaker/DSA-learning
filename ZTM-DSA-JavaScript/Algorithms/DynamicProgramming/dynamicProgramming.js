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