// Take an input and check whether the input is an integer or not
function checkNumber(input) {
    if (typeof (input) !== 'number') { return false; }
    let regex = /^-?[0-9]+$/
    if (regex.test(input)) {
        return true;
    } else {
        return false
    }
}
console.log(checkNumber(''));

function checkNumbers(input) {
    let notAnNumber = false;
    for(let i = 0; i< input.length ; i++){
        if(input[i] >= "0" && input[i] <= "9"){
            continue;
        }else{
            notAnNumber = true;
            break;
        }
    }
    return notAnNumber;
}
console.log(checkNumbers("1234567"));


const regex = new RegExp('^[0-9]+$')
console.log(regex);
