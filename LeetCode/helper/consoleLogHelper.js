const c = function(obj) {
  for(key in obj) console.log(`${key}: `, obj[key])
}

module.exports = { c }