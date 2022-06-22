function ispln(str) {
    if (str.length <= 1) return true;
    else if (str[0] == str.slice(-1)) {

        return ispln(str.slice(1, -1))
    } else {
        return false;
    }
}

console.log(ispln('mam'))