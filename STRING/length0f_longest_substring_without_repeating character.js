// Longest Substring Without Repeating Characters

const longestSubstringWithoutRepeatingCharacter = (str) => {
    let map = new Map();
    let start = 0;
    let max = 0;

    for (let i = 0; i < str.length; i++){
        let endChar =str[i];
        if(map[endChar] >= start ){
            start = map[endChar] + 1;
        }
        map[endChar] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
}


console.log(longestSubstringWithoutRepeatingCharacter('abcabcbb'));
