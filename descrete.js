function factorial(number){
    let factorial = 1;
    for (let n = 1; n <= number; n++) {
        factorial = factorial * n;
    }
    return factorial;
}

module.exports = { factorial };