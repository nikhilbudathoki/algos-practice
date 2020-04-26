/*
We will use adjacency lists to model graphs
        because real-world data tends to 
        model itself into sparse graphs
*/

// Building an undirected graph
class Graph {
	constructor() {
		this.adjanceyList = {};
	}
	addVertex(name) {
		if (!this.adjanceyList[name]) this.adjanceyList[name] = [];
	}

	addEdge(v1, v2) {
		this.adjanceyList[v1].push(v2); // For directed and undirected
		this.adjanceyList[v2].push(v1); // Only undirected graphs
	}

	removeEdge(v1, v2) {
		this.adjanceyList[v1] = this.adjanceyList[v1].filter(
			item => item !== v2
		);
		this.adjanceyList[v2] = this.adjanceyList[v2].filter(
			item => item !== v1
		);
	}

	removeVertex(vertex) {
		while (this.adjanceyList[vertex].length) {
			const adjV = this.adjanceyList[vertex].pop();
			this.removeEdge(vertex, adjV);
		}
		delete this.adjanceyList[vertex];
	}

	DFS(recursive = true) {
		if (recursive) return DFS_recursive();
		return DFS_iterative();
	}

	DFS_recursive() {

	}

	DFS_iterative() {

	}
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
