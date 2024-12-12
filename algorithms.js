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



function reverseArray(array) { // [3, 2, 4]
    const curr = array.slice();
    let counter = 0;
  
    for (let i = curr.length - 1; i >= 0; i--) {
      array[counter] = curr[i];
      counter++;
    }
  }

function reverseArray(array) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
  
      left++;
      right--;
    }
  }
  
  let array = [3, 2, 4];
  reverseArray(array);
  
  console.log(array);

//Binary Search JS Implemantation

function binarySearch (array, target) {
    let left = 0;
    let right = array.length -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return middle;
        }

        if (array[middle < target]) {
            left = middle + 1;
        } else {
            right = middle -1;
        }
    }

    retunr -1
}


