console.log('Hii');


function validBraces(braces) {
    // const brackets = {
    //     '{': '}',
    //     '[': ']',
    //     '(': ')'
    // }

    const map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']

    ]);
    let stack = [];

    for (el of braces) {
        if (map.has(el)) {
            stack.push(map.get(el))
        } else if (stack.pop() !== el) {
            return false;
        }
    }

    // for (let char of braces) {
    //     if (brackets[char]) {
    //         stack.push(brackets[char])
    //     } else {
    //         if (stack.pop() !== char) return false
    //     }
    // }
    return stack.length === 0
}

console.log(validBraces("{{{([])}}}"));
