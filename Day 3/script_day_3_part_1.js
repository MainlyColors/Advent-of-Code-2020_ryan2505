/* 
Challenges:

1. parse HTML, break each line by character limit into their own string (done)
2. keeping track of how far down and how far right
3. Finding out a way to repeat the string/pattern 

31 characters every line
*/
"use strict";

const rawDataInput = document.querySelector("pre").textContent;
const dataInput = [];

// checks for space or new line carriage
function stringVerifier(str) {
  if (str === " " || str.charCodeAt(0) === 10) {
    return true;
  } else {
    return false;
  }
}
let tempStr = [];
let cnt = 0;
// its not grabing the last line in the string for datainput, fix this
for (let i = 0; i < rawDataInput.length; i++) {
  if (stringVerifier(rawDataInput[i])) continue;
  if (cnt <= 30) {
    tempStr.push(rawDataInput[i]);
  } else {
    dataInput.push(tempStr.join(""));
    tempStr = [];
    cnt = 0;
    tempStr.push(rawDataInput[i]);
  }
  cnt++;
}

dataInput.push("..#.##.#....#.#....#.#...#....."); // last line of input that isn't grabbing

console.log(dataInput);

let right = 0;
// let down = 0;
let treeCounter = 0;
// only skipping the first line, not every other line. fix this
for (let i = 1; i < dataInput.length; i++) {
  right += 3;
  // # in unicode = 35
  // . in unicode = 46
  while (right >= 31) {
    right = right - 32; //minus 1 more then string length to because we index based off 0
  }
  // puzzle does not count its own space, so right -1 is not necessary
  if (dataInput[i].charCodeAt(right) === 35) {
    treeCounter++;
  }
}

console.log(treeCounter);
// console.log(".".charCodeAt(0));
// # in unicode = 35
// . in unicode = 46

// its not grabing the last line in the string for datainput
//***********************^^^^^^^^ */

console.log(".##.#.........#.....#....#...#."[30]);
