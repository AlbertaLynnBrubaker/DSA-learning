//If you know a solution is not far from the root of the tree:
// BFS
// BFS -> because it starts searching the closest node to the parent

//If the tree is very deep and solutions are rare: 
// BFS
// BFS -> DFS will take a really long time because of the depth and because solutions are rare. There are memory concerns with BFS here.

//If the tree is very wide:
// DFS
// DFS -> BFS will need too much memory and go through most of the tree to find a solution

//If solutions are frequent but located deep in the tree:
// DFS
// DFS

//Determining whether a path exists between two nodes:
// DFS
// DFS -> DFS is ideal FOR this operation

//Finding the shortest path:
// BFS
// BFS -> BFS is ideal FOR this operation