//Get number of hours, minutes and seconds from number of seconds

function convertToTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  // Removing the hours from the total seconds to get the remaining seconds
  seconds = seconds % 3600;
  //  number of minutes 60min = 3600 sec
  var minutes = Math.floor(seconds / 60);

  seconds = seconds % 60;

  return `Hours = ${hours}, minutes = ${minutes}, seconds = ${seconds}`;
}

// Example usage
console.log(convertToTime(129)); // Output will appear in console

//You are given two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.

function xorRange(L, R) {
  var xor = 0;
  for (var i = L; i <= R; i++) {
    xor = xor ^ i;
  }
  // Check if the XOR value is odd or even
  if (xor % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Testcases as pr your requirements
var T = 4;
var testcases = [
  [1, 4],
  [2, 6],
  [3, 3],
  [2, 3],
];

// Loop through the testcases
for (var i = 0; i < T; i++) {
  var L = testcases[i][0];
  var R = testcases[i][1];
  console.log(xorRange(L, R));
}
//output will be in console

//You are given with T number of strings. You need to sort the strings according to their first character.

function sortStrings(strings) {
  // Sort the array of strings according to their first character
  return strings.sort((a, b) => a[0] > b[0]);
}

// Testcases
var testcases = ["AXXX", "UVVVV", "PGGGG", "BOOUU"];

console.log(sortStrings(testcases));

//output will be in console
