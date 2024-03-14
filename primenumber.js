function prime(n){
    if(n<2){
        return false;
    }
    for(i=2;i<n;i++){
        if(n%i===0){
            return "not a prime"
        }
    }
    return 'prime'
}

console.log(prime(1));
console.log(prime(2));
console.log(prime(13));
console.log(prime(15));
console.log(prime(23));


