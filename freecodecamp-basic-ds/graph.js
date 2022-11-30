// in a graph, nodes are called vertices and lines connecting them are called edges

// a JS representation of a graph with edges connecting a to b and b to c as an Adjacency List might look like this
const undirectedGraph = {
  NodeA: ['NodeB'],
  NodeB: ['NodeA', 'NodeC'],
  NodeC: ['NodeB']
}
// can also more simply be listed as an array where the nodes have numbers rather than strings
const undirectedGraphArry = [
  [1],
  [0, 2],
  [1]
]

// ADJACENCY MATRIX
// another way is to put it in an Adjacency Matrix. The vertices make up both the top and left of the matrix with numbers demonstrating edges

//  a b c
//a[0,1,0]
//b[1,0,1]
//c[0,1,0]

const undirectedGraphAdjMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
]
// the same representation can be used represent a directed graph, where the edges point in one direction to a specific vertex

const directedGraphAdjMatrix = [
  [0, 0, 0], // a has no edges directed out of it
  [1, 0, 0], // b has an edge pointing to only a
  [0, 1, 0]  // c has an edge pointing to only b
]

// INCIDENCE MATRIX
// another way to represent a graph is with an Incidence Matrix. Unlike the Adjacency Matrix, the IM's sides mean different things. Rows will represent indeces and columns with represent edges.

// undirected graph IM
//  1 2 3
//a[1,0,1] a to b and b to a on edge 1, a to c and c to a on 3
//b[1,1,0] b to a and a to b on 1, b to c and c to b on 2
//c[0,1,1] c to b and b to c on 2, c to a and a to c on 3

// directed graph IM
//   1  2  3
//a[ 1, 0,-1] a to b on 1
//b[-1, 1, 0] b to c on 2
//c[ 0,-1, 1] c to a on 3
// -1s still show a connection between indeces but the graph only flows one way

// graphs can also have different weights represented by numbers greater than 1

// GRAPH TRAVERSAL
// Breadth-first search is meant to find the distance from one index to another

function breadthFirstSearch(graph, root) {
  const nodesLen = {}

  for(let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity
  }
  nodesLen[root] = 0

  const queue = [root]
  let current

  while(queue.length !== 0) {
    current = queue.shift()

    let curConnected = graph[current]
    const neighborIndex = []
    let index = curConnected.indexOf(1)
    while(index != -1) {
      neighborIndex.push(index)
      index = curConnected.indexOf(1, index + 1)
    }

    for(let j = 0; j < neighborIndex.length; j++) {
      if(nodesLen[neighborIndex[j]] === Infinity) {
        nodesLen[neighborIndex[j]] = nodesLen[current] + 1
        queue.push(neighborIndex[j])
      }
    }
  }
  return nodesLen
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

console.log(breadthFirstSearch(exBFSGraph, 1))
