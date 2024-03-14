// DFS can be implemented recursively and can detect cycles in a graph.
function dfsVisit(graph, currentVertex, visited, parent) {
    visited[currentVertex] = true;

    for (const neighbor of graph[currentVertex]) {
        if (!visited[neighbor]) {
            if (dfsVisit(graph, neighbor, visited, currentVertex)) {
                return true;
            }
        } else if (neighbor !== parent) {
            return true;
        }
    }

    return false;
}

function hasCycle(graph) {
    let visited = {};
    for (const vertex in graph) {
        visited[vertex] = false;
    }

    for (const vertex in graph) {
        if (!visited[vertex]) {
            if (dfsVisit(graph, vertex, visited, -1)) {
                return true;
            }
        }
    }

    return false;
}


module.exports = { hasCycle };
