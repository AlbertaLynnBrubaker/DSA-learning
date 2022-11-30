# Time Big O Rules

## Big O Rule 1

### Worst Case

We always think about the worst case when we calculate Big O

## Big O Rule 2

### Remove Constants


Whenever we have two of the same thing, they distill down to one of that form of notation.

O(n + n) = O(2n) = O(n)

## Big O Rule 3

### Different terms for inputs

Different terms for inputs or different sets of elements in the same function (different arguments) will reflect that in notation

```
function(array1, array2) {
  array1.forEach(...)

  array2.forEach(...)
}
```

O(n) !== to O(n + m) even if their runtime is the same number

This is similar but different from nested loops

```
function(array1, array2) {
  array1.forEach(element => {
    array2.forEach(...)
  })  
}
```

In this case, for each element in array1, we are running through ALL the elements in array2. This gives us a Big O of n * n

O(n^2) is quadratic and growth is exponential, which is far less than ideal

## Big O Rule 4

### Drop Non Dominants

Whatever our worst Big O notation is within a piece of code, we can drop all smaller Big O times because we are only tracking the CHANGE in growth between elements and number of operations.

```
function(array) {...}

function(array) {
  array.forEach(element => {
    array.forEach(secondElement => {
      console.log(element + secondElement)
    })
  })  
}
```

O(n + n^2) = O(n^2) we only care about growth and quadratic time will grow significantly faster than linear time


## Extra

What is the Big O of calling .length on a string?
Depends on the language.

```
'asdhflasdhflakdsflasndflas'.length
```

In JavaScript, .length is a property of an array NOT a method built on the array. It does not count each element but rather stores the length as characters get added and so it is a simple lookup on an object which is O(1)

so something more like this but happening under the hood

```
class String {
  constructor (str, len) {
    this.string = str
    this.length = len
  } 
}

const str = new String(
  string: 'asdhflasdhflakdsflasndflas',
  length: 26
)
```