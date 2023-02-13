const { c } = require('../../helper/consoleLogHelper')

const items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]

var mergeSimilarItems = function(items1, items2) {
  const map = {}

  const addToMap = function(pair) {
    if(pair[0] in map) map[pair[0]] += pair[1]
    else map[pair[0]] = pair[1]
  }

  let len = items1.length > items2.length ? items1.length : items2.length
  
  for(let i = 0; i < len; i++) {
    if(items1[i]) addToMap(items1[i])
    if(items2[i]) addToMap(items2[i])
  }
  
  return Object.entries(map).sort((a, b) => a[0] - b[0])
};

c({res: mergeSimilarItems(items1, items2)})