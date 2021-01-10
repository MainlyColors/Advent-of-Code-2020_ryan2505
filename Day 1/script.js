//steps
//- need a function that finds two numbers that equal 2020,
// nested for loop most likly
//- function needs to multiple them

//- need a way to parse through the html list and convert it to an array

/* psuedo code
get input from the array
use the first element of the array to compare against
parse through the array and add each element one at a time to the first then repeat
stop the array when 2020 sum is found
*/

const dataInput = document.querySelector(".data").textContent.split(" ");

function strListToNumList(arr) {
  let dataArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) === 0) {
      continue;
    } else {
      dataArray.push(Number(arr[i]));
    }
  }
  return dataArray;
}

const testArray = strListToNumList(dataInput);

//two number version
// function specialNumFinder(arr) {
//   let num1 = 0;
//   let num2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const starting = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (starting + arr[j] === 2020) {
//         num1 = starting;
//         num2 = arr[j];
//         return num1 * num2; // will break out when answer is found
//       }
//     }
//   }
// }

//three number version
function specialNumFinder(arr, total) {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  for (let i = 0; i < arr.length; i++) {
    const starting = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (starting === 0 && arr[j] === 0) {
        continue;
      }
      const twoValueSum = starting + arr[j];
      num1 = starting;
      num2 = arr[j];
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] !== total - twoValueSum) {
          continue;
        } else {
          num3 = arr[k];
          return num1 * num2 * num3;
        }
      }
    }
  }
}

console.log(specialNumFinder(testArray, 2020));

const trial = [3, 29, 18, 16, 4, 25, 89, 5, 95, 1, 0, 72, 6, 32, 7, 24];
//15 = 7+ 3 +5 answer:105
console.log(specialNumFinder(trial, 15));

//Part 1 Answer: 1019571
//Part 1 Answer: 100655544
