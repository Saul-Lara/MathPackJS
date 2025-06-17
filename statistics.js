function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function standardDeviation(arr) {
  const avg = average(arr);
  const sumSquare = arr.reduce((acc, val) => acc + (val - avg) ** 2, 0);
  return Math.sqrt(sumSquare / arr.length);
}

module.exports = { average, standardDeviation };