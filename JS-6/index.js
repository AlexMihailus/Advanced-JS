const trimString = (str, n) => {
    if (n <= str.length) {
        return str.slice(0, n) + '...';
    } else {
        return str;
    }
}
console.log(trimString('Testing String', 3));
console.log(trimString('Testing String', 8));
console.log(trimString('Test', 8));