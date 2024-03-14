[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

# Runtime Analysis of DFS for Cycle Detection

The cycle detection algorithm implemented using Depth-First Search (DFS) involves several steps that contribute to the overall runtime complexity:

## Algorithm Steps:

1. **Initialization**:
   - The $visited$ object is initialized, marking all vertices as not visited. This setup is completed in $O(V)$ time complexity, where $V$ is the number of vertices in the graph.

2. **DFS Traversal**:
   - The algorithm performs a DFS starting from each unvisited vertex, resulting in the following complexities:
     - **Visiting Vertices**: Every vertex is visited exactly once during the traversal, contributing to an $O(V)$ complexity.
     - **Exploring Edges**: Each adjacency list is explored once for every vertex, meaning each edge is checked once, leading to an $O(E)$ complexity in the process.

3. **Cycle Detection**:
   - A cycle is detected during DFS when an already visited vertex is found again, which indicates a loop. This check is included within the DFS exploration and does not increase the overall time complexity beyond the $O(E)$ accounted for edge exploration.

## Combined Complexity:

- The initialization process has a time complexity of $O(V)$.
- The DFS traversal across vertices and edges has a time complexity of $O(V + E)$.

Given these complexities, the traversal is the dominating factor.

## Worst-Case Big Theta Complexity:

Considering all the components of the algorithm, the worst-case time complexity for detecting cycles using DFS in an undirected graph is $$\Theta(V + E)\$$ This complexity suggests a linear relationship between the algorithm's execution time and the graph's size (quantified by its vertices and edges) as each element is processed no more than once during the traversal in order to detect a cycle.

Reference: https://www.geeksforgeeks.org/detect-cycle-in-a-graph/



