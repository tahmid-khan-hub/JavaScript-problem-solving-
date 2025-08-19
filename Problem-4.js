function findTheMaxNumber(arr){
    let maxi = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(maxi <= arr[i]){
            maxi = arr[i];
        }
    }

    return maxi;
}

console.log(findTheMaxNumber([5,1,7,12,3]));