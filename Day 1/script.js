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
    if (Number(arr[i] === 0)) {
      continue;
    } else {
      dataArray.push(Number(arr[i]));
    }
  }
  return dataArray;
}

function specialNumFinder(arr) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    const starting = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (starting + arr[j] === 2020) {
        num1 = starting;
        num2 = arr[j];
        return num1 * num2; // will break out when answer is found
      }
    }
  }
}

// console.log(specialNumFinder(dataArray));

const testArray = strListToNumList(dataInput);

console.log(specialNumFinder(testArray));

//Answer: 1019571
