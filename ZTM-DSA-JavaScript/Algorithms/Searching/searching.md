# Searching

## Linear Searching

```
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
  return item === 'Godzilla';
});

beasts.find(function(item){
  return item === 'Godzilla';
})

beasts.includes('Godzilla')
```

Each of these JS methods does a linear time search through each element of the array to find the relevant data. As we know, this has a time of O(n)

## Binary Search

```
const list = [1, 4, 6, 9, 12, 34, 45]
```

If we have a sorted list, we can use binary search. We keep cutting the list in half until we find the value. This gives us a search time of O(log n), just like traversal through a BST.

## Breadth First Search

You traverse the tree by moving from left to right at each level of the tree. You keep going until you find the node you're looking for or the tree ends.

Using BFS uses additional memory because you have to track every node and its children in order.

## Depth First Search

You traverse the tree by moving down one branch of the tree down as far as you can, then you go back up to the most recent ancestor with children and follow that branch. Then back up again until you've searched the whole tree.

DFS has a lower memory requirement because it is not necessary to store all the child pointers at each level.

## The reason for the two searches

BFS Pros:
  1. Shortest Path between a starting point and any other reachable node
  2. Visits nodes closer to the root first

Cons:
  1. More memory

If you have additional knowledge of the location of the node you are searching for, especially if you know the node is in the upper portion of the tree, then you would want to choose BFS. 

A Min or Max Heap is a great example. If we know the root is a certain value and that the node we are searching for is close to that number but less than it, we can use BFS to beat our O(n) worst case.

DFS Pros:
  1. Uses less memory
  2. Finding if a path exists from a source to a target

Cons:
  1. DFS can be very slow if the tree is deep.

A Binary Tree is a better place to use DFS because we know taking a branch could eliminate a lot of other nodes.

## implementation

We can implement a BFS using a linear function or recursion.

We have three ways to implement a DFS: PreOrder, InOrder, or PostOrder

InOrder -> starts with the smallest node value in a BST and traverses in order

PreOrder -> starts with the root then goes all the way down the left and works left to right. Mostly useful if we want to recreate a tree.

PostOrder -> Children come before the parent. We traverse to the bottom left leaf, then take any siblings before the parent. Then we work up and to the right. We skip over the root and then go to the very bottom left of the right subtree and repeat the process. Best if the data is likely to be on a leaf or near the bottom of the tree.