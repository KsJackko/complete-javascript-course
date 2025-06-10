// 'use strict';

// let hasDriverLience = false;
// const passTest = true;

// if (passTest) hasDriverLience = true;
// if (hasDriverLience) console.log('I can drive :)');

//34# functions
// function fruitProcessor(apple, orange) {
//   const Jackko = `I have ${apple} apple and ${orange}.`;
//   return Jackko;
// }

// fruitProcessor(1, 2);
// const appleJuice = fruitProcessor(2, 4);
// console.log(appleJuice);
// console.log(fruitProcessor(1, 2));

// 35# Function Declartions vs. Expression
// console.log(calcAge1(1));

// function calcAge1(birthYear) {
//   return 2050 - birthYear;
// }

// const age1 = calcAge1(2004);

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// console.log(calcAge2(1));

// const age2 = calcAge2(2004);

// console.log(age1, age2);

// 36#  Arrow function
// function calcAge1(birthYear) {
//   return 2050 - birthYear;
// }

// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(2004);
// console.log(calcAge3(age3));

// const calcAge4 = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} will retire in ${retirement} years.`;
// }

// console.log(calcAge4(2004, 'Jackko'));

// 36# Function calling other function
// const cutPieces = function (fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//   const applePieces = cutPieces(apple);
//   const orangePieces = cutPieces(orange);
//   const juice = `I have ${applePieces} apple and ${orangePieces}.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 2));
