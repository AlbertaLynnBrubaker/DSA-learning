// ES6 has a built in Set object with a number of useful methods, most of which are mirrored below.

function mySet() {
  // array that holds the set
  const collection = []

  // this method will return true if the element is present
  this.has = function(element) {
    return(collection.indexOf(element) !== -1)
  }

  // this method will return all the values in the set
  this.values = function() {
    return collection
  }

  // this method will add an element to the set while ensuring no duplication. in ES6, the add() method will return the set itself, not a boolean
  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  // this method will remove an element from the set. In ES6 this method is called .delete()
  this.remove = function(element) {
    if(this.has(element)) {
      let index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  //this method will return the size of the collection. In ES6, size is a property not a method and so you do not invoke it to use it
  this.size = function() {
    return collection.length
  }


  // *** BELOW NOT INCLUDED IN ES6 Set object ***

  // this method will return all of the elements in both sets
  this.union = function(otherSet) {
    const unionSet = new mySet()
    const firstSet = this.values()
    const secondSet = otherSet.values()
    firstSet.forEach(element => {
      unionSet.add(element)
    })
    secondSet.forEach(element => {
      unionSet.add(element)
    })
    return unionSet
  }

  // this method will return all the elements that are common to both sets
  this.intersection = function(otherSet) {
    const intersectionSet = new mySet()
    const firstSet = this.values()
    firstSet.forEach(element => {
      if(otherSet.has(element)) {
        intersectionSet.add(element)
      }
    })
    return intersectionSet
  }

  // this method will return the difference of the two sets as a new set
  this.difference = function(otherSet) {
    const differenceSet = new mySet()
    const firstSet = this.values()
    firstSet.forEach(element => {
      if(!otherSet.has(element)) {
        differenceSet.add(element)
      }
    })
    return differenceSet
  }

  // this method will test if the set is a subset of a different set and return a boolean
  this.subset = function(otherSet) {
    const firstSet = this.values()
    return firstSet.every(value => {
      return otherSet.has(value)
    })
  }
}

const setA = new mySet()
const setB = new mySet()
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())

const setC = new Set()
const setD = new Set()
setC.add('a')
setD.add('b')
setD.add('c')
setD.add('a')
setD.add('a')
console.log(setD.values())
setD.delete('a')
console.log(setD.has('a'))
console.log(setD.add('d'))
