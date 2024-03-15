// tests
const { hasCycle } = require('./code');

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

const graphWithSimpleCycle = {
    'a': ['b'],
    'b': ['c'],
    'c': ['a'] // Creates a cycle: a -> b -> c -> a
};

const graphWithNoCycleLarge = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': [],
    'e': []
}; // A larger graph without a cycle

const graphWithMultipleCycles = {
    'a': ['b', 'c'],
    'b': ['a', 'd', 'e'],
    'c': ['a', 'f'],
    'd': ['b'],
    'e': ['b', 'f'],
    'f': ['c', 'e'] // Multiple cycles present
};

const tests = [
    { graph: graphWithCycle, expected: true, description: 'Graph with a single cycle' },
    { graph: graphWithoutCycle, expected: false, description: 'Graph without a cycle, simple' },
    { graph: graphWithSimpleCycle, expected: true, description: 'Graph with a simple cycle' },
    { graph: graphWithNoCycleLarge, expected: false, description: 'Larger graph without a cycle' },
    { graph: graphWithMultipleCycles, expected: true, description: 'Graph with multiple cycles' }
];

function runTests() {
    tests.forEach(({ graph, expected, description }, index) => {
        const result = hasCycle(graph);
        console.assert(result === expected, `Test ${index + 1}: ${description} failed. Expected ${expected}, got ${result}.`);
    });
    console.log("All tests passed or specified correctly!");
}

runTests();

