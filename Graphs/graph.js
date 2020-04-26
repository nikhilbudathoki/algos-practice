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
                this.adjanceyList[v1].push(v2);
                this.adjanceyList[v2].push(v1);
        }
}

g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");
console.log(g.adjanceyList);