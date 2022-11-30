// Stack functions:
  // push -> add an element to the end of a stack
  // pop -> remove the last element from a stack
  // peek -> to view the last element of a stack
  // length -> to view the number of elements in a stack

// arrays can be used as a stack

let letters = []

const word = 'blue'

let rword = ''

// push all the letters from the word into our letters array
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// pop off the letters stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if (rword === word) {
  console.log(word + ' is a palindrome')
} else {
  console.log(word + ' is not a palindrome')
}

// a stack as a homemade class. Largely for demonstration and understanding purposes as the built in methods for an array function like the stack DS

const Stack = function() {
  this.count = 0
  this.storage = {}

  // adds a value onto the stack
  this.push = function(value) {
    this.storage[this.count] = value
    this.count++
  }

  // removes a value from the end of the stack
  this.pop = function() {
    if(this.count === 0) {
      return undefined
    }

    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  // logs the element on the top of the stack
  this.peek = function() {
    return this.storage[this.count - 1]
  }

  // logs the number of elements in the stack
  this.size = function() {
    return this.count
  }
}

const myStack = new Stack()

myStack.push('hi')
myStack.push('hello')
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())