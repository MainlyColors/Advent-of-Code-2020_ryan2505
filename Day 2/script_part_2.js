//
//Day 2 Part 2
//

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

// seperate data into arrays with 3 elements, range, key, password
const passwordSets = [];

for (let i = 0; i < dataInput.length; i += 3) {
  const tempArr = [dataInput[i], dataInput[i + 1], dataInput[i + 2]];
  passwordSets.push(tempArr);
}

console.log(passwordSets);

// converts the string into location array == > [6, 10]
function twoLocationFinder(str) {
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

//takes string and returns true if exactly one letter matches the index location
function vaildPasswordParser(arrRange, letterKey, password) {
  if (password.charAt(arrRange[0] - 1) === letterKey && password.charAt(arrRange[1] - 1) === letterKey) {
    return "invalid";
  } else if (password.charAt(arrRange[0] - 1) === letterKey) {
    return "valid";
  } else if (password.charAt(arrRange[1] - 1) === letterKey) {
    return "valid";
  } else {
    return "invalid";
  }
}

let totalCorrectPasswordsCount = 0;

for (let i = 0; i < passwordSets.length; i++) {
  const arg1 = twoLocationFinder(passwordSets[i][0]);
  const arg2 = keyFinder(passwordSets[i][1]);
  const arg3 = passwordSets[i][2];
  if (vaildPasswordParser(arg1, arg2, arg3) === "valid") {
    totalCorrectPasswordsCount += 1;
  }
}

console.log(totalCorrectPasswordsCount);

// answer day 2 part 2 : 413
