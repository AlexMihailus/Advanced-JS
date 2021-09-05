const deleteChar = (str, n) => {
    if (str.length < n) {
        return '';
    }
    for (let char = 97; n > 0; char++) {
        for (let j = 0; j < str.length; j++) {
            if (n == 0) {
                return str
            }
            if (str.charCodeAt(j) == char) {
                str = str.split('');
                str[j] = "";
                str = str.join('');
                n--;
            }
        }
    }
}
console.log(deleteChar('abracadabra', 1));
console.log(deleteChar('abracadabra', 2));
console.log(deleteChar('abracadabra', 6));
console.log(deleteChar('abracadabra', 8));
console.log(deleteChar('abracadabra', 50));