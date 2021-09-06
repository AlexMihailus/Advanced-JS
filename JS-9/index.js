const daysRepresented = (arr) => {
    let trip = 0;
    for (let i = 0; i < arr.length; i++) {
        trip += arr[i][1] - arr[i][0] + 1;
    }
    return trip;
}
console.log(daysRepresented([[10, 15], [25, 35]]));
console.log(daysRepresented([[2, 8], [220, 229], [10, 16]]));
console.log(daysRepresented([[13, 20], [86, 93]]));
console.log(daysRepresented([[1, 2], [8, 10], [12, 15]]));
console.log(daysRepresented([[2, 8], [10, 16], [19, 26]]));