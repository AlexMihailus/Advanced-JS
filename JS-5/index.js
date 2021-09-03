const findVowels = (str) => {
    const result = str.match(/[аеёиоуыэюя]/gi);
    return result === null ? 0 : result.length;
}
console.log(findVowels('Привет'));
console.log(findVowels('Абракадабра'));

const findVowels2 = (str) => {
    let count = 0;
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count;
}
console.log(findVowels2('Привет'));
console.log(findVowels2('Абракадабра'));

const findVowels3 = (str) => {
    const vowels = "аеёиоуыэюя";
    let count = [...str.toLowerCase()].filter(el => vowels.includes(el)).length;
    return count;
}
console.log(findVowels3('Привет'));
console.log(findVowels3('Абракадабра'));