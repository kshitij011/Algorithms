function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while (n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2
    }
    return true;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(7));

// Input size is divided by half. So time complexity is O(logn)