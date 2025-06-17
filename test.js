const { average, standardDeviation } = require('./statistics')
const { factorial } = require('./descrete')
const { generateBarChart } = require('./charts')

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard deviation:', standardDeviation(data));

generateBarChart('chart.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
  console.log('Chart created.');
});

console.log('Factorial of 5:', factorial(5));