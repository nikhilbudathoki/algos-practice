// Building an undirected weighted graph
class WeightedGraph {
        constructor() {
                this.adjList = {};
        }
        addVertex(name) {
                if (!this.adjList[name]) this.adjList[name] = [];
        }

        addEdge(v1, v2, weight) {
                this.adjList[v1].push({ node: v2, weight }); // For directed and undirected
                this.adjList[v2].push({ node: v1, weight }); // Only undirected graphs
        }
}

module.exports = WeightedGraph