//
//Day 2 Part 1
//

// need a way to get my input to work with
//pre always leaves 7 spaces between each line

const rawDataInput = document.querySelector("pre").textContent.split(" ");
const dataInput = [];

// removes new line character
function carriageReturnRemover(str) {
  const endChar = str.length - 1;
  // 10 equal newline ASCII code
  if (str.charCodeAt(endChar) === 10) {
    const arr = str.split("");
    arr.pop();
    return arr.join("");
  } else {
    return str;
  }
}

//sanitizes raw data into a smaller workable array
for (let i = 0; i < rawDataInput.length; i++) {
  if (rawDataInput[i] === "") {
    continue;
  } else {
    dataInput.push(carriageReturnRemover(rawDataInput[i]));
  }
}

console.log(dataInput);

// converts the string into a range example: "6-10" == > [6, 10]
function rangeFinder(str) {
  //created 2 element array
  const x = str.split("-");
  x[0] = Number(x[0]);
  x[1] = Number(x[1]);
  return x;
}

// splits the search key into one letter, example: s: ==> s
function keyFinder(str) {
  const x = str.split("");
  return x[0];
}

//takes string and returns true if number of letter falls within range4 example s :snkscgszxsssscss ==>
function vaildPasswordParser(arrRange, key, password) {
  const parseArr = password.split("");
  let count = 0;
  for (let i = 0; i < parseArr.length; i++) {
    if (parseArr[i] === key) {
      count += 1;
    }
  }
  if (count >= arrRange[0] && count <= arrRange[1]) {
    return true;
  } else {
    return false;
  }
}

// seperate data into arrays with 3 elements, range, key, password
const passwordSets = [];

for (let i = 0; i < dataInput.length; i += 3) {
  const tempArr = [dataInput[i], dataInput[i + 1], dataInput[i + 2]];
  passwordSets.push(tempArr);
}

let correctPasswordCount = 0;
for (let i = 0; i < passwordSets.length; i++) {
  if (vaildPasswordParser(rangeFinder(passwordSets[i][0]), keyFinder(passwordSets[i][1]), passwordSets[i][2])) {
    correctPasswordCount += 1;
  }
  // vaildPasswordParser(rangeFinder(passwordSets[i][0]), keyFinder(passwordSets[i][1]), passwordSets[i][2])
}

console.log(correctPasswordCount);

// Answer : 414 for day 2 part 1
