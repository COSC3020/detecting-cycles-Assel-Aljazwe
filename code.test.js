const { hasCycle } = require('./code');

// Define some test graphs
const graphWithCycle = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a', 'd'],
    'd': ['b', 'c']
};

const graphWithoutCycle = {
    'a': ['b'],
    'b': ['c'],
    'c': ['d'],
    'd': []
};

// Tests array with test cases
const tests = [
    { graph: graphWithCycle, expected: true, description: 'Graph with a cycle' },
    { graph: graphWithoutCycle, expected: false, description: 'Graph without a cycle' }
];

// Function to run all tests
function runTests() {
    tests.forEach((test, index) => {
        const { graph, expected, description } = test;
        const result = hasCycle(graph);
        console.assert(result === expected, `Test ${index + 1}: ${description} failed. Expected ${expected}, got ${result}.`);
    });
}

runTests();
console.log("All tests passed!");

