// least character and frequency

let str = "stringggstri"

function map(str) {
    let map = new Map();
    for (let el of str) {
        if (map.get(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1)
        }
    }

    let minFreq = Math.min();
    let leastChar = '';

    for (let i of map) {
        if (minFreq > i[1]) {
            minFreq = i[1];
            leastChar = i[0]
        }

    }
    return (leastChar + " " + minFreq)
}

console.log(map(str));
