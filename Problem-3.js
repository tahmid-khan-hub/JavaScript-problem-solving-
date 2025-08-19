function checkPalindrome(str) {
    let rev_str = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }

    for(let i = 0; i < str.length; i++){
        if(rev_str[i] != str[i]){
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome("eve"));