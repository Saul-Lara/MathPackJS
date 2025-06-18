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

function circularPermutation(items){
 return factorial(items - 1)
}

module.exports = { factorial, linearPermutation, circularPermutation };