const { average, standardDeviation } = require('./statistics')
const { factorial, linearPermutation, circularPermutation, combinations, distributions } = require('./descrete')
const { generateBarChart } = require('./charts')

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard deviation:', standardDeviation(data));

generateBarChart('chart.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
  console.log('Chart created.');
});

console.log('Factorial of 5:', factorial(5));

console.log('Total linear permutations (8 P 3) are:', linearPermutation(8, 3));

console.log('Total circular permutations (8 - 1)! are:', circularPermutation(8));

console.log('Total combinations (30 C 8) are:', combinations(30, 8));

console.log('Total distributions ((7 + 5 - 1) C 5) are:', distributions(7, 5));