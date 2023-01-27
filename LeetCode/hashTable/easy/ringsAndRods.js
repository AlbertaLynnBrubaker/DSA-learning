

const rings = "B0R0G0R9R0B0G0"

var countPoints = function(rings) {
  const map = new Map()
  let result = 0

  for(let i = 0; i < rings.length; i += 2 ) {
    let color = rings[i]
    let key = `${rings[i + 1]}`
    if(!map.has(key)) {
      let set = new Set()
      map.set(key, set.add(color))
    } else {
      map.get(key).add(color)
    }
  }

  for(let ring of map.values()) {
    if(ring.has("B") && ring.has("G") && ring.has("R")) result++
  }
  return result
};

c({res: countPoints(rings)})