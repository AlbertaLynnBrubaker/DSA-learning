# Arrays

## Array Big O basics

```
const strings = ['a', 'b', 'c', 'd']

// we can make a couple of assumptions. On a 32-bit system we would be storing 16 bytes of information of the above array (simplistically speaking)

strings[2] // telling the computer to go to the strings array and to grab the third item in the array. Time= O(1)

// push

strings.push('e') // push just adds the element to the end of the array, which also has a Big O of O(1).

// pop

strings.pop() // pop also just grabs the last item in the array which is O(1) the CPU knows that the last item is at strings[strings.length -1] and always will be

// unshift

strings.unshift('x') // unshift takes every index and moves it by +1 so that we can place our new element at index 0. This is iterative and so this operation is linear, O(n).

// splice

strings.splice(2, 0, 'alien') // we are looking up an index, we are adding + 1 to the indices of all the elements after our addition so, again, we are looking at O(1 + n/2) = O(n)

// shift

strings.shift() // likewise, shift has to move each element's index by -1 and so it is O(n)
```