# Graphs

Graphs are one of the most used and useful DS for modeling real life.

A graph is a set of values that are related in a pair-wise fashion.

In a Graph, each item is called a vertex (node). Each vertex is connected by an edge.

## Types of Graphs

### Directed and Undirected

#### Directed

Directed graphs have edges that only point one direction from one vertex to another.

A busy city might have intersections of one way streets be represented by a Directed Graph.

Following on Tumblr is a Directed Graph since I can follow someone who does not also follow me and vice versa.

#### Undirected

Undirected graphs have edges that point both ways between two vertices.

A more traditional town map where roads travel in two directions might be represented by an Undirected Graph.

Friends on Facebook are an Undirected Graph since everyone who is a friend of mine, I am also a friend of.

### Weighted and Unweighted Graphs

#### Unweighted

With Graphs, each vertex can store all kinds of information but edges can also store information. In an Unweighted Graph, there is no special value assigned to individual edges or they have the same priority.

#### Weighted

With Weighted Graphs, each edge can hold a value that is given a particular value. That value can determine the importance or priority of the data flowing between vertices.

Google Maps might use this information (distace or traffic... or both) to decide which route might be the best to follow.

### Cyclic or Acyclic

#### Cyclic

In a Cyclic Graph, edges travel between vertices and can be followed back to the vertex that was started on

Again with Google Maps, a traveller might leave from home but take a different route from their destination to return home again. These Graph types can be combined and a Weighted Cyclic Undirected Graph would be an apt description of Google Maps.

#### Acyclic

Whereas, an Acyclic Graph does not allow for a cyclical path back to the original vertex.

## Representing Graph data

```
// Edge List
// An edge list is simply an array that lists all of the edges between nodes that have relationships
const graph = [[0,2], [2,3], [2,1], [1,3]]

// Adjacency List
// An array where the index is the node itself and the element is the node's neighbors. This can also use an object with the key as the node
const adList = [[2], [2,3], [0, 1, 3], [1, 2]]

// Adjacency Matrix
// Each zero is a node that does not share an edge with the corresponding node. Each one is a node that shares an edge with the node. You can represent directed graphs by only showing a one on the receiving node. You can show weights by using numbers besides just 0, 1
const adMatrix = [
//     0  1  2  3
/*0*/ [0, 0, 1, 0]
/*1*/ [0, 0, 1, 1]
/*2*/ [1, 1, 0, 1]
/*3*/ [0, 1, 1, 0]
]
```