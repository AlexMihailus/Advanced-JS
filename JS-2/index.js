const mispelled = (str1, str2) => {
    let count = 0;
    const strDiff = str1.length - str2.length;
    if (Math.abs(strDiff) > 1) return false;
    else if (Math.abs(strDiff) === 1) {
        let [longStr, smallStr] = strDiff > 0 ? [str1, str2] : [str2, str1];
        for (let i = 0, j = 0; i < longStr.length; i++, j++) {
            if (longStr[i] !== smallStr[j]) {
                count++;
                j--;
            }
            if (count > 1) return false;
        }
    } else {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) count++;
            if (count > 1) return false;
        }
    }
    return count === 1;
}

console.log(mispelled('versed', 'xersed'));
console.log(mispelled('versed', 'applb'));
console.log(mispelled('versed', 'v5rsed'));
console.log(mispelled('1versed', 'versed'));
console.log(mispelled('versed', 'versed1'));
console.log(mispelled('versed', 'aversed'));
console.log(mispelled('aaversed', 'versed'));
console.log(mispelled('versed', 'aaversed'));