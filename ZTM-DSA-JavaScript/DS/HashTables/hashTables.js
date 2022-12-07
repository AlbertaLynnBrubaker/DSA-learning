// MY SOLUTION -> I know it does not consider edge cases or collisions

class HashTable {
  
  constructor(size) {
    this.data = new Array(size)
  }

  #privateHash(key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    const hashKey = this.#privateHash(key)    
    this.data[hashKey] = [key, value]
  }

  get(key) {
    const hashKey = this.#privateHash(key)    
    if(this.data[hashKey]) {
      return this.data[hashKey][1]
    }
  }
}

// ANDREI'S SOLUTION

class AndreiHash {
  
  constructor(size) {
    this.data = new Array(size)
  }

  #privateHash(key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this.#privateHash(key)
    if(!this.data[address]) {
      this.data[address] = []
    }     
    this.data[address].push([key, value])    
  }

  get(key) {
    let address = this.#privateHash(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  } // O(1) UNLESS there is a collision. Unless the memory allocation of the Hash Table is very small, collisions aren't extremely likely so our avg Big O is still considered O(n)

  // Bonus feature... search by key
  keys() {
    const keysArray = []
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        // Andrei DID NOT ADDRESS COLLISIONS       
        if(this.data[i].length > 1) { 
          for(let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        }
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const myHashTable = new AndreiHash(50)
myHashTable.set('grapes', 80)
myHashTable.set('bottles of beer', 99)
myHashTable.set('apples', 12)
myHashTable.set('bricks', 24000)
myHashTable.set('bananas', 123)
myHashTable.set('cars', 3)
console.log(myHashTable.keys())