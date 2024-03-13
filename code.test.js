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

const tests = [
    { graph: graphWithCycle, expected: true },
    { graph: graphWithoutCycle, expected: false }
];

tests.forEach(({ graph, expected }, index) => {
    const result = hasCycle(graph);
    console.assert(result === expected, `Test ${index + 1} failed. Expected ${expected}, got ${result}.`);
});

console.log("All tests passed!");
