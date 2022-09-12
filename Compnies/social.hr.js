const arr = [1, 2, 3, 4, 3, 5, 1]


function find(arr) {

    return new Promise((resolved, rejected) => {
        let map = new Map();
        const result = []

        for (let el of arr) {
            if (map.has(el)) {
                result.push(el)
                map.set(el, map.get(el) + 1);

            } else {
                map.set(el, 1)
            }
        }

        for (let i of map) {
            if (i[1] > 1) {
                return rejected("Duplicates Found : " + result)
            }

        }
        return resolved("No Duplicates Found")

    })
}


// const res = async () => {
//     try {
//         const result = await find(arr);
//         return result;
//     } catch (err) {
//         return { "error": err }
//     }
// }

// console.log(res());

find(arr)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
