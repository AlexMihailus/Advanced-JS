const sumOfTwo = (arr, n) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

console.log(sumOfTwo([2, 7, 11, 15], 9));
console.log(sumOfTwo([12, 24, 34, 2], 14));
console.log(sumOfTwo([2, 7, 11, 15], 22));
console.log(sumOfTwo([2, 7, 11, 15], 99));