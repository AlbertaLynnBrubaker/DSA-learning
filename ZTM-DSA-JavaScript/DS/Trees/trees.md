# Trees

## Linked List

A Linked List is actually a Tree. It has only one child of each parent node that we reference with a pointer and the root node of a LL is called the head. We often track the last node in the tree (the leaf) by calling it the tail.

## Binary Tree

A Binary Tree is a tree where each node can have a maximum of two children.

A perfect BT is a tree where every parent node has two children. As we move down each level of the tree, the number of nodes doubles. The number of nodes on the last level of the tree is equal to the sum of all the nodes on lower levels plus one. So a two level tree has four nodes on the last level. Levels 0 and 1 added together equal three... then add one to make four. This is always true.

Also, the expression 2^n where n is the index of the levels down (root level is indexed 0) describes the total number of nodes on a given level. 2^0 = 1... the root. 2^1 = 2 so two nodes on level one. 2^2 = 4 so four nodes on level two. 2^3 = 8 so eight nodes on level three. So on...

The total number of nodes can be expressed 2^h - 1 where h is the height of the tree (root is 1 node high. So a three height tree has seven nodes. A four height tree has fifteen nodes.

This means log2 n = h is true a tree with 64 nodes has a height of 6. We forget the minus one because for Big O it is insignificant. Hence, we say that Binary Trees have a O(log n)

## Binary Search Trees

All nodes with a value greater than their parent go to the right of the parent. All nodes with a value lower than their parent go to the left of the parent.

All nodes can have maximum two children.

As a BST becomes more unbalanced, the search time approaches O(n)