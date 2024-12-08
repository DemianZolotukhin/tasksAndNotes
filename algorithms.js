const arr = [12, -1, 0, 2, 32, -10];

function findMax(arr) {
    let bigNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > bigNum) {
            bigNum = arr[i]
        }
    }

    return bigNum
}

console.log(bigNum)


const temperature_measurement = [26, 29, 31, 31, 25, 19];
console.log(temperature_measurement[1]);

temperature_measurement[5] = 21;
console.log(temperature_measurement);

temperature_measurement.push(14);
console.log(temperature_measurement);