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

## Dynamic Arrays

Because arrays are created in directly adjacent blocks of memory, we have to tell our system how many elements will be in the array so it can set the array in memory.

With dynamic arrays, however, each time we hit the maximum number of allocated spaces in memory for our array, the system copies our array, doubles the number of allocated slots (so an array of 4 bytes would get copied with 4 additional bytes of free space someplace elese in memory), then deletes the original allocation. When we hit our max again, the dynamic array will double from 8 bytes to 16 bytes.

```
const strings = ['a', 'b', 'c', 'd']
```

Our runtime of push() here might actually be O(n). When the CPU moves a dynamic array at the end of its memory allocation it has to loop through the array to copy and move the array before doubling the allocation. So if we are at the end of allocaiton, our O(1) will actually be O(n)... which introduces why some languages like C++ or Java like static arrays. If we KNOW we aren't adding any or many elements to an array, we can allocate the right amount of space in these other languages and ensure our constant runtime.