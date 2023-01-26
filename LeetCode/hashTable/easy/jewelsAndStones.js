

var numJewelsInStones = function(jewels, stones) {
  const set = new Set(jewels)
  let total = 0

  for(let stone of stones) {
    if(set.has(stone)) total++
  }

  return total
};

c({res: numJewelsInStones("z", "ZZ")})