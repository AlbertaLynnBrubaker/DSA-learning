# Sorting

## Understanding when to use which sorting method

```
const basket = [2, 65, 34, 2, 1, 7, 8]

basket.sort()

console.log(basket)

basket.sort((a, b) => a - b)

console.log(basket)
```

It is important to understand that the factory default .sort() method in JavaScript without an anonymous function defined converts numbers to strings and uses the .charCodeAt() to determine the value of something.

This is a great example of the nuances involved in using sorting algorithms.

## Bubble Sort

Bubble sorting compares values at indices which are next to each other and the higher valued index is "bubbled up" to the right. The twin indices move over one each and do this again.

Then once we hit the end of the array, we got back to the start and do it again. Then again until no values bubble up, which means our array is sorted.

## Selection Sort

Seleciton sort looks for the smallest item in a list by comparing a moving value while saving the smallest item. Then at the end of the list, it moves whatever the smalles item is to index 0.

Then it does it again until the second smallest in index 1, etc... until the list is sorted.

## Insertion Sort

Insertion sort is especially useful when you are pretty sure the list is almost sorted. Also performs really well in small datasets.