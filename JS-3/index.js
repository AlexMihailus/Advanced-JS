const solve = (str) => {
    let upper = 0;
    let lower = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            upper++;
        } else {
            lower++;
        }
    }
    if (lower >= upper) {
        return str.toLowerCase();
    } else {
        return str.toUpperCase();
    }
}

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('Code'));