const timeCorrect = (str) => {
    const time = str.split(':');
    if (time[2] > 60) {
        time[2] -= 60;
        time[1]++;
    };
    if (time[1] > 60) {
        time[1] -= 60;
        time[0]++;
    };
    time[0] %= 24;
    if (time[0].toString().length === 1) {
        time[0] = '0' + time[0];
    }
    return time.join(':');
}

console.log(timeCorrect('09:10:01'));
console.log(timeCorrect('11:70:10'));
console.log(timeCorrect('19:99:09'));
console.log(timeCorrect('19:99:99'));
console.log(timeCorrect('24:01:01'));
console.log(timeCorrect('52:01:01'));