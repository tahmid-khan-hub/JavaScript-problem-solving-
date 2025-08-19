function countVowels(str) {
    let cnt = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            cnt++;
        }
    }

    return cnt
}

console.log(countVowels("programming"))