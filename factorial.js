// find the factorial of the given number n

// const factorial = (n) => {
//     let result = 1;
//     for(; 1<n; n--){
//         result = n* result;
//     }
//     return result;
// }

function factorial(n){
    let result =1
    for(let i=2; i<=n; i++){
        result = result*i
    }
    return result
}
console.log(factorial(5));