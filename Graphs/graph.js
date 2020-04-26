/*
We will use adjacency lists to model graphs
        because real-world data tends to 
        model itself into sparse graphs
*/

// Building an undirected graph
class Graph {
	constructor() {
		this.adjList = {};
	}
	addVertex(name) {
		if (!this.adjList[name]) this.adjList[name] = [];
	}

	addEdge(v1, v2) {
		this.adjList[v1].push(v2); // For directed and undirected
		this.adjList[v2].push(v1); // Only undirected graphs
	}

	removeEdge(v1, v2) {
		this.adjList[v1] = this.adjList[v1].filter(
			item => item !== v2
		);
		this.adjList[v2] = this.adjList[v2].filter(
			item => item !== v1
		);
	}

	removeVertex(vertex) {
		while (this.adjList[vertex].length) {
			const adjV = this.adjList[vertex].pop();
			this.removeEdge(vertex, adjV);
		}
		delete this.adjList[vertex];
	}

	DFS_R(start) {
		let result = [];
		let visited = {};
		const adjList = this.adjList;

		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			})
		})(start); // This syntax calls the function immediately with "start"
		return result;

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
console.log(g.DFS_R("A"));