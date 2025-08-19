function factorial(n) {
    let ans = n;

    for(let i = n-1; i > 0; i--){
        ans *= i;
    }

    return ans;
}

console.log(factorial(7));