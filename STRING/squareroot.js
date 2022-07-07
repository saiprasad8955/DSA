// find Square Root of given number

function squareRoot(num, left, right) {
    while (true) {
        let mid = (left + right) / 2;

        let mul = mid * mid;

        if (mul == num || (Math.abs(mul - num)).toFixed(5) < 0.00001) {
            return mid;
        }

        else if (mul > num) {
            right = mid;
        } else {
            left = mid;
        }
    }
}

// square root
function findsqrt(num) {
    let i = 1;
    const found = false;
    while (found == false) {
        //if n is a perfect squre
        if (i * i === num) {
            return i;
        } else if (i * i > num) {
            let res = squareRoot(num, i - 1, i);
            return res.toFixed(5)
        };
        i++;
    }
}

console.log(findsqrt());
