// To implement the hasCycle function which detects cycles within a graph, we can use the Union-Find algorithm, 
// which is efficient and commonly used in cycle detection, especially in the context of Kruskal's algorithm

// Helper functions for Union-Find
function find(parent, i) {
    if (parent[i] !== i) {
        parent[i] = find(parent, parent[i]);
    }
    return parent[i];
}

function union(parent, rank, x, y) {
    const xroot = find(parent, x);
    const yroot = find(parent, y);

    if (xroot === yroot) {
        return true;
    }

    if (rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    } else if (rank[yroot] < rank[xroot]) {
        parent[yroot] = xroot;
    } else {
        parent[yroot] = xroot;
        rank[xroot] += 1;
    }

    return false;
}

function hasCycle(graph) {
    const parent = {};
    const rank = {};

    // Initialize parent and rank for each vertex
    for (const vertex in graph) {
        parent[vertex] = vertex;
        rank[vertex] = 0;
    }

    // Iterate over all edges to find subsets of vertices
    for (const vertex in graph) {
        for (const neighbor of graph[vertex]) {
            const x = find(parent, vertex);
            const y = find(parent, neighbor);

            // If two vertices share the same root, a cycle is found
            if (x === y) {
                return true;
            }

            union(parent, rank, x, y);
        }
    }

    // If no cycle was found
    return false;
}

module.exports = { hasCycle };
