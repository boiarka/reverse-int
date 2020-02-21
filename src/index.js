module.exports = function reverse(n) {
    let res;
    if (String(n)[0] === '-') {
        res = String(n).match(/(\d+)/)[0].split('').reverse().join('');
    } else {
        res = String(n).split('').reverse().join('');
    }

    return res;
}
