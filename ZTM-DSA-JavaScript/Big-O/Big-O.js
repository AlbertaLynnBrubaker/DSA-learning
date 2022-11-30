const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(1000000).fill('nemo')

const findNemo = (array) => {
  for(let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!')
    }
  }  
}

findNemo(large) // O(n) --> Linear Time
// as n increases, the number of operations also increases by the same amount per iteration

const compressFirstBox = (boxes) => {
  console.log(boxes[0])
}

// compressFirstBox([1,2,3,4,5]) // O(1) --> Constant Time
// as n increases, the number of operations does not increase but stays constant.

const compressTwoBox = (boxes) => {
  console.log(boxes[0])
  console.log(boxes[1])
}

// compressTwoBox([1,2,3,4,5]) // O(2) BUT we call it O(1) because we are worried about the delta of the line not necessarily the starting point.


// TIME COMPLEXITY

function boooo(n) {
  for(let i = 0; i < n.length; i++) {
    console.log( 'boooooo!' )
  }
} // O(1)

function arrayOfHiNTimes(n) {
  let hiArray = []
  for(let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
} // O(n)



