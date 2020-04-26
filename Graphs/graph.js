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
}