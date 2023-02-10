const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

class MyHashMap {
  constructor() {
    this.hashMap = new Array(4999)
  }

  #privateHash(key) {
    key = `${key}`
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.hashMap.length
    }
    return hash
  }

  put(key, value) {
    this.remove(key)
    let hashed = this.#privateHash(key)
    let address = new Node(key, value, this.hashMap[hashed])
    this.hashMap[hashed] = address
  }

  get(key) {
    let hashed = this.#privateHash(key)
    let address = this.hashMap[hashed]
    while(address) {
      if(address.key === key) return address.value
      address = address.next
    }
    return -1
  }

  remove(key) {
    let hashed = this.#privateHash(key)
    let address = this.hashMap[hashed]
    if(!address) return
    if(address.key === key) this.hashMap[hashed] = address.next
    while(address.next) {
      if(address.next.key === key) {
        address.next = address.next.next
        return
      }
      address = address.next
    }
  }
}

class Node {
  constructor(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}

const myHashMap = new MyHashMap();
c({res: myHashMap.put(1, 1)}); // The map is now [[1,1]]
c({res: myHashMap.put(2, 2)}); // The map is now [[1,1], [2,2]]
c({res: myHashMap.get(1)});    // return 1, The map is now [[1,1], [2,2]]
c({res: myHashMap.get(3)});    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
c({res: myHashMap.put(2, 1)}); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
c({res: myHashMap.get(2)});    // return 1, The map is now [[1,1], [2,1]]
c({res: myHashMap.remove(2)}); // remove the mapping for 2, The map is now [[1,1]]
c({res: myHashMap.get(2)});    // return -1 (i.e., not found), The map is now [[1,1]]