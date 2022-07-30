// palindrome means same if you reverse it 
// ignoring case sensitivity
// 'madam'   =========>>>>>> 'madam'
// 'abadaba'   =========>>>>>> 'abadaba'
// 'Able was I ere I saw Elba'  =========>>>>>> 'Able was I ere I saw Elba'


function ispalindrome(str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return 0;
        left++;
        right--;
    }
    return 1;
}



// let str = 'madam'
const palindrome = ispalindrome("Able was I ere I saw Elba");
console.log(palindrome)













