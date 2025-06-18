function factorial(number){
    let factorial = 1;
    for (let n = 1; n <= number; n++) {
        factorial = factorial * n;
    }
    return factorial;
}

function linearPermutation(items, positions){
    return Math.floor(factorial(items)/factorial(items - positions));
}

module.exports = { factorial, linearPermutation };