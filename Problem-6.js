function sumOfAllNumbers(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfAllNumbers([1,2,3,14]));