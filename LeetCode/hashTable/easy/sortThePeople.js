

var sortPeople = function(names, heights) {
  // make a Map keys of heights and values of names
  const map = new Map()

  for(let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i])
  }

  // sort the heights array in descending order
  heights = heights.sort((a, b) => b - a)

  // return a map of the names array by referencing the keys in the Map
  return heights.map(height => map.get(height))
};

c({res: sortPeople(["Mary","John","Emma"], [180,165,170])})