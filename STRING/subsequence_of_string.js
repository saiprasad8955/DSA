// subsequence

function subsequence(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    // Considering the elements
    subsequence(input.substring(1), output + input[0]);

    // Not considering the elements
    subsequence(input.substring(1), output)
}

// console.log('abc'.substring(1));

console.log(subsequence('abc', ''));






