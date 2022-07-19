let s = "Let's take LeetCode contest";

var reverseWords = function (s) {
    return s.split(' ').map(reverse).join(' ');

};

var reverse = function (word) {
    var len = word.length;
    var res = '';
    for (var i = 0; i < len; i++) {
        res += word[len - i - 1];
    }
    return res;
};

console.log(reverseWords(s));


