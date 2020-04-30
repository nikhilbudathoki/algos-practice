const PriorityQueue = require('./priority_queue.js')

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

        dijkstra(start, finish) {
                const distances = {}
                const nodes = new PriorityQueue();
                const previous = {}
                let path = [];

                for (let vertex in this.adjList) {
                        if (vertex === start) {
                                distances[vertex] = 0
                                nodes.enqueue(vertex, 0);
                        }
                        else {
                                distances[vertex] = Infinity
                                nodes.enqueue(vertex, Infinity);
                        }
                        previous[vertex] = null;
                }

                let smallest;
                while (nodes.values.length) { //as long as there is something to visit
                        smallest = nodes.dequeue().val;
                        if (smallest === finish) {
                                // Done, build path to return
                                while (previous[smallest]) {
                                        path.push(smallest);
                                        smallest = previous[smallest];
                                }
                                break;
                        }
                        if (smallest || distances[smallest] !== Infinity) {
                                let neighbors = this.adjList[smallest];
                                neighbors.forEach(nextNode => {
                                        // Calculate distance from n to start
                                        let candidate = distances[smallest] + nextNode.weight;
                                        if (candidate < distances[nextNode.node]) {
                                                // Updating new smallest distance to nextNode
                                                distances[nextNode.node] = candidate;
                                                // Updating previous - how we got to neighbor
                                                previous[nextNode.node] = smallest;
                                                // enqueue in priority queue with new priority
                                                nodes.enqueue(nextNode.node, candidate);
                                        }
                                });

                        }
                }

                return path.concat(smallest).reverse();
        }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

//console.log(graph.adjList);
console.log(graph.dijkstra("A", "E"));

