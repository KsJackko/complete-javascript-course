// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//#61. Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [9, 0, 8, -2, -5, -20];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const maxTemp = function (temperatures) {
//   let max = temperatures[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] === "error") {
//       continue;
//     } else if (max < temperatures[i]) {
//       max = temperatures[i];
//     }
//   }
//   return max;
// };

// const minTemp = function (temperatures) {
//   let min = temperatures[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] === "error") {
//       continue;
//     } else if (min > temperatures[i]) {
//       min = temperatures[i];
//     }
//   }
//   return min;
// };

// console.log(maxTemp(temperatures), minTemp(temperatures));

// const tempAmplitude = function () {
//   return maxTemp(temperatures) - minTemp(temperatures);
// };

// console.log(tempAmplitude());

// const tempAmplitude = function (temperatures) {
//   let max = temperatures[0];
//   let min = temperatures[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== "number") continue;
//     if (max < temperatures[i]) max = temperatures[i];
//     if (min > temperatures[i]) min = temperatures[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(tempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// -The 2 arrays record the same day?
// 2) How to merge the 2 arrays?

// const tempAmplitudeNew = function (t1, t2) {
//   const temperatures = t1.concat(t2);
//   console.log(temperatures);

//   let max = temperatures[0];
//   let min = temperatures[0];

//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== "number") continue;
//     if (max < temperatures[i]) max = temperatures[i];
//     if (min > temperatures[i]) min = temperatures[i];
//   }

//   console.log(max, min);
//   return max - min;
// };

// console.log(tempAmplitudeNew(temperatures1, temperatures2));
// 63. Debugging with the Console and Breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     Type: "Temp",
//     unit: "celius",
//     value: Number(prompt("Degree in celsius.")),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `... ${arr[i]} in ${i + 1} day `;
//   }
//   console.log(str + "...");
// };

// printForecast(data1);

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWeek(hours) {
  if (hours.length !== 7) {
    throw new Error("Input must be an array of exactly 7 daily work hours.");
  }
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const totalHours = hours.reduce((sum, h) => sum + h, 0);
  const averageHours = parseFloat((totalHours / hours.length).toFixed(1));
  const maxHours = Math.max(...hours);
  const dayWithMostHours = days[hours.indexOf(maxHours)];
  const daysWorked = hours.filter((h) => h > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Test Data
const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWeek(testData));
