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


## Divide and Conquer and O(n log n)

## Merge Sort

Effectively, a merge sort takes all the elements in a list and divides them in half again and again until each node is down to two elements, then it compares each of these elements. Then each pair sort against the pair next to them to become four sorted elements. Then four to eight. Eight to sixteen. Etc... until all the elements are sorted.

## Quick Sort

Just like merge sort, quick sort uses a divide and conquer approach and has a time complexity of O(n log n). Quick sort breaks lists into smaller lists and uses a pivoting technique on the two halves of the list. Everything higher than the pivot goes right, the pivot moves left and the left-of-pivot moves to the same index that the original compare element lives.

IF YOU CAN'T GUARANTEE THAT THE DATA WILL BE GOOD OR YOU CAN'T REALLY PICK A GOOD PIVOT, you should avoid using quick sort and maybe pick a different sort sort.

## So when do I use which sort?

Insertion Sort - if your inputs are really small or your input is already mostly sorted. The best case time is O(n) and the space is O(1)

Bubble Sort - only really used for educational purposes. Not very efficient

Selection Sort - most likely educational as well

Merge Sort - merge sort is really good for the way it divides and conquers, giving us at least part of our time is log n. Merge sort does have a space O(n) so it is not great on space.

Quick Sort - It has a better space and very close time to merge sort, but if you can't pick your pivot the worst case is O(n^2)

Heap Sort - on paper, it appears better than quick sort or merge sort, but on average quick sort will be faster. So unless you are very concerned about space or are picking your pivot blind, quick sort is a faster sorting algo

## 