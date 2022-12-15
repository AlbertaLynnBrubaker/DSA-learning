# Binary Heap

Every child belongs to a parent node that has a greater "priority" or value. Also known as a max heap.

A min heap works the opposite. Every child node has a higher value than its parent.

We add values from left to right in a Heap. As a higher priority node is added, it will bump lower values down to the last node location left to right. As higher priority values are removed, the last value is placed in the index location and then cycled down by value in every sub tree as it approaches the last open spot right to left. In this way, we still maintain the correct insertion order even when items are bumped.

## Heap Gotcha!

Memory Heap != Heap Data Structure

The Memory Heap is the JS runtime engine's storage of declared variables, function declarations, etc... and runs synchronously with the Call Stack and asynchronously with the Web APIs, the Callback Queue and the Event Loop.

# Trie

A specialized tree used in searching. Most often used for text.

Usually has an empty root node. A Trie is not a binary tree and each node can have as many children as it makes sense for it to have.

Used for searching words in a dictionary, autocompleting text or making suggestions based on input.