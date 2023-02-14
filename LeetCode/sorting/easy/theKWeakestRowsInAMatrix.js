const { c } = require('../../helper/consoleLogHelper')

var kWeakestRows = function(mat, k) {
  // map the mat into [index, numOfSol]
  mat = mat.map((row, index) => {
    return [index, row.reduce((acc, val) => acc + val, 0)]
  })
  // sort by a[1] - b[1], check to see if matches by a[0] <= b[0]
  mat = mat.sort((a, b) => a[1] - b[1])

  return mat.map(pair => pair[0]).slice(0, k)
};

c({res: kWeakestRows([[1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]], 3)})