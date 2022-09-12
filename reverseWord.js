const Str = 'om kar bhai'


function reverse1(str) {
    str = str.split('')
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
    }
    return str.join('')
}


// // function wordRverse
// // console.log(reverse(Str));

// // console.log(reverse(Str));

// let ll = Str.split(' ')
// console.log(ll)

//  let x = ll.map((ele)=>{

// //   console.log(ele.split('').reverse().join('')) 
//  return ele.split('').reverse1().join('')
// })

// // console.log(x.join(' '))

function wordReverse(str) {
    str = str.split(' ')
    let result = ''
    for (let i = 0; i < str.length; i++) {
        str[i] = reverse1(str[i])
    }
    console.log(result)
    return str.join(' ')
}

console.log(wordReverse(Str));
