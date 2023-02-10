const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

class MyHashSet {
  constructor() {
    this.hashSet = new Array(500)
  }

  #privateHash(key) {
    key = `${key}`
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.hashSet.length
    }
    return hash
  }

  add(key) {
    let hashed = this.#privateHash(key)
    if(this.hashSet[hashed] === undefined) {
      this.hashSet[hashed] = new Node(key)
    } else {
      let address = this.hashSet[hashed]
      if(address.key === key) return
      while(address.next) {
        if(address.next.key === key) return
        address = address.next
      }
      address.next = new Node(key)
    }
  }

  remove(key) {
    let hashed = this.#privateHash(key)
    let address = this.hashSet[hashed]
    if(address === undefined) return
    if(address.key === key) {
      if(address.key === null) this.hashSet[hashed] = undefined
      else this.hashSet[hashed] = this.hashSet[hashed].next
    }
    while(address.next) {
      if(address.next.key === key) {
        address.next = address.next.next
        return
      }
      address = address.next
    }
  }

  contains(key) {
    let hashed = this.#privateHash(key)
    let address = this.hashSet[hashed]
    while(address) {
      if(address.key === key) return true
      address = address.next
    }
    return false
  }
}

class Node {
  constructor(key) {
    this.key = key
    this.next = null
  }
}

const myHashSet = new MyHashSet();
c({res: myHashSet.add(1)});      // set = [1]
c({res: myHashSet.add(2)});      // set = [1, 2]
c({res: myHashSet.contains(1)}); // return True
c({res: myHashSet.contains(3)}); // return False, (not found)
c({res: myHashSet.add(2)});      // set = [1, 2]
c({res: myHashSet.contains(2)}); // return True
c({res: myHashSet.remove(2)});   // set = [1]
c({res: myHashSet.contains(2)}); // return False, (already removed)