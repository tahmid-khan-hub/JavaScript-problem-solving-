function capitalizeFirstLetter(str) {
    let ans = "";

    if(str.length > 0) ans += str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
        if(str[i-1] === " ") ans += str[i].toUpperCase();
        else ans += str[i];
    }

    return ans;
}

console.log(capitalizeFirstLetter("hello world"));