// normal function
function add(a, b, c) {
    return a + b + c
}

console.log(add(1, 2, 3));

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const result = add(23)
console.log(result);

const result2 = result(34);
const result3 = result2(23);
console.log(result3);


const resulter = add(12)(23)(45);
console.log(resulter);

// Another Example of currying
// Currying is helpful when you have to frequently call a function with a fixed argument.
// Without currying
// Currying provides a shorter, concise, and more readable solution.

function log(type, msg) {
    if (type == "error")
        console.error(msg);
    if (type == "warn")
        console.warn(msg);
    if (type == "info")
        console.info(msg);
}


const errors = (msg) => log("error", msg);
errors('hey');
const warns = (msg) => log("warn", msg);
warns('hey');
const infos = (msg) => log("info", msg);
infos('hey');

// With currying
// log = curry(log)
// const error = log("error")
// const warn = log("warn")
// const info = log("info")



