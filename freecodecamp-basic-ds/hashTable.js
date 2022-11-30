

// max is the number of buckets we are using to store data
const hash = function(string, max) {
  let hash = 0
  for(let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
} 

const HashTable = function() {

  const storage = []
  // the number of buckets. Normally it would be much higher
  const storageLimit = 14

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    const index = hash(key, storageLimit)
    if(storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ]
    } else {
      let inserted = false
      for(var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }
      if(inserted === false) {
        storage[index].push([key, value])
      }
    }
  }

  this.remove = function(key) {
    const index = hash(key, storageLimit)
    if(storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for(var i = 0; i < storage[index]; i++) {
        if(storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }

  this.lookup = function(key) {
    const index = hash(key, storageLimit)
    if(storage[index] === undefined) {
      return undefined
    } else {
      for(var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
  }
}

const ht = new HashTable()
ht.add('andi', 'person')
ht.add('tbone', 'dog')
ht.add('diana', 'cat')
ht.add('remi', 'ferret')
console.log(ht.lookup('diana'))
ht.print()