/// String Anagram  /// with changed arrangement
// "hello" --> "llheo"

// check length first of both String
// check length otherwise its not anagram

function isAnagram(str1, str2) {

    if (str1.length != str2.length) return false;

    count = {};
    for (let letters of str1) {
        // console.log(letters)
        count[letters] = (count[letters] || 0) + 1   // value undefined will be zero
    }
    // console.log(count)
    // console.log(count)
    for (let items of str2) {
        if (!count[items]) return false;
        count[items] -= 1;
    }
    // console.log(count)

    return true;
};          
// linear time complexity O(n)

const hero = isAnagram('hello', 'llheo')
console.log(hero);

