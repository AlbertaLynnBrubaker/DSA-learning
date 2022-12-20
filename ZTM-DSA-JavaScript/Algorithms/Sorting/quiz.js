//#1 - Sort 10 schools around your house by distance:
// Mine: Insertion Sort
// Andrei: Insertion Sort 
// small data pool

//#2 - eBay sorts listings by the current Bid amount:
// Merge Sort
// Radix or Counting Sort
// bids are generally between $0 and $50,000ish and so we know the roughly fixed integer range and could sort non-comparatively

//#3 - Sport scores on ESPN
// Quick Sort
// Quick Sort
// variance in sport score formats but concern for memory use if we use merge sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Heap Sort
// Merge Sort
// We're not going to be sorting in memory but because the data is so big we are really worried about worst case time complexity

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort
// Insertion Sort
// list is mostly already sorted

//#6 - Temperature Records for the past 50 years in Canada
// Merge Sort
// Radix or Counting Sort IF the temperatures are integers
// Quick Sort
// better on space complexity than merge sort for large pools of data in memory

//#7 - Large user name database needs to be sorted. Data is very random.
// Merge Sort
// Merge Sort IF memory isn't a big issue
// Quick Sort IF we aren't too worried about worst case

//#8 - You want to teach sorting for the first time
// Bubble or Selection Sort