# Linked Lists

## Pointers

``` 
const obj1 = { a: true}
const obj2 = obj1

console.log(obj1)
obj1.a = 'booya'
console.log(obj2)
```

obj1 and obj2 are both pointing to the same location in memory. Even if we delete obj1, {a: true} will still exist in memory because there is still a pointer existing in memory (in JavaScript). In low-level languages, data in memory does not get 'garbage collected' so you have to manage your own memory. Like everything in programming, this has advantages and disadvantages.