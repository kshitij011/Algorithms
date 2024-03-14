//Given a number 'n' find the first 'n' elements of the fiblnacci series.
//Fiboncci sequence is a sequence in which each number is the sum of the two preceing ones.

const fibonacci = (n) => {
    fib = [0, 1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}

console.log(fibonacci(6));