function fibonacci(n){
    if (n<0) return "OOPS";
    else {
    let startVal = 0;
    let endVal = 1;
    for (let i=2; i<=n; i++){
        total = startVal + endVal;
        startVal = endVal;
        endVal = total;
    }
    return endVal;
}
}

// Do not edit below this line
module.exports = fibonacci;
