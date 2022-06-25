// reverse Sentence letters

function reverse(str) {

    if (str.length == 0) return ""
    return reverse(str.slice(1)) + str[0]
}


function revsentWords(sent) {

    let words = sent.split(" ")

    for (let i = 0; i < words.length; i++)
        words[i] = reverse(words[i])

    return words.join(" ")
}

console.log(revsentWords("hi to all"))