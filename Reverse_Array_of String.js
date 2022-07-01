// Reverse String

const s = ["h", "e", "l", "l", "o"]


function reverseString(str) {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        // let temp = s[left]
        // s[left] = s[right]
        // s[right] = temp
        [str[left], str[right]] = [str[right], str[left]]
        left++;
        right--;
    }
    return str
}

const sum = reverseString(s)
console.log(sum)