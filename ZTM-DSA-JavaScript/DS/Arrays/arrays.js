class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      // we are shifting each item at the current index and instead replacing it with the item at one index higher
      this.data[i] = this.data[i + 1]
    }
    // the last index from before the shift exists as undefined, so we have to get rid of it a decrement length
    delete this.data[this.length - 1]
    this.length--
  }
}

const a1 = new MyArray()
a1.push('hi')
a1.push('you')
a1.push('!')
console.log(a1)
a1.delete(1)
console.log(a1)