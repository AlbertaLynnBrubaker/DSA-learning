const { c } = require('../../helper/consoleLogHelper')

// given a equalateral integer matrix n x n, determine the number of rows and columns that are made of identical elements

// we can push each column into a Map as a string then iterate each row by joining the array and comparing to our map's values

const grid = [[11,1],[1,11]]

var equalPairs = function(grid) {
    const map = new Map()
    let pairs = 0

    for(let i = 0; i < grid[0].length; i++) {
        let key = ""
        for(let j = 0; j < grid.length; j++) {
            key ? key += ` ${grid[j][i]}` : key = `${grid[j][i]}`
        }
        map.get(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
    }

    for(let n = 0; n < grid.length; n++) {
        let key = grid[n].join(' ')
        if(map.has(key)) {
            pairs += map.get(key)
        }
    }

    return pairs
};

// hashing the rows and comparing to columns. Faster as it does not rely on .join() or whitespace in strings. Also beats ~80% on memory, too.
// let a = 6907;
// let k = 0;
// var equalPairs = function(grid) {
//     let rows = {};
//     let pairs = 0;
//     for(let r = 0; r < grid.length; r++) {
//       let hash = 0;
//       for(const i of grid[r]) {
//         hash = i + hash * a;
//         hash = hash >> k;
//       }
//       if (!rows[hash]) rows[hash] = 0;
//       rows[hash]++;
//     }
//     for (let c = 0; c < grid.length; c++) {
//       let hash = 0;
//       for (let i = 0; i < grid.length; i++) {
//         hash = grid[i][c] + hash * a;
//         hash = hash >> k;
//       }
//       if (rows[hash]) pairs += rows[hash];
//     }
//     return pairs;
// };

c({res: equalPairs(grid)})
