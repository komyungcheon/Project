let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let allNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < allNumbers.length; i++) {
    if (numbers.indexOf(allNumbers[i]) === -1) {
        console.log(allNumbers[i]);
    }
}
