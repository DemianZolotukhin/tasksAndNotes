const arr = [12, -1, 0, 2, 32, -10];
let bigNum = arr[0];

for (let i = 0; i < arr.length; i++) {
        if(arr[i] > bigNum) {
            bigNum = arr[i]
        }
}

console.log(bigNum)
