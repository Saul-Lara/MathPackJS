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
 return factorial(items - 1);
}

function combinations(set, subset){
 return Math.floor(factorial(set) / (factorial(set - subset) * factorial(subset)))
}

function distributions(containers, items){
    return combinations((containers + items - 1), items)
}

module.exports = { factorial, linearPermutation, circularPermutation, combinations, distributions };