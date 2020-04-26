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
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("LA");
g.addVertex("HK");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("HK", "Tokyo");
g.addEdge("Dallas", "HK");
g.addEdge("LA", "HK");
g.addEdge("LA", "Aspen");
console.log(g.adjanceyList);
