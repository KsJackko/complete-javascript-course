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

//38# function review
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// }

// const calcAge4 = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} will retire in ${retirement} years.`)
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`)
//     return 9999;
//   }
//   // return `${firstName} will retire in ${retirement} years.`;
// }

// console.log(calcAge4(2004, 'Jackko'));
// console.log(calcAge4(1980, 'Niki'));

//40# introduction to arrary
// const friend1 = 'Jackko'
// const friend2 = 'Mary'
// const friend3 = 'Coco'

// const friend = ['Jackko', 'Mary', 'Coco'];
// console.log(friend);

// const year = new Array(2004, 2005, 2006);
// console.log(year);

// console.log(friend[1]);

// console.log(friend.length);
// console.log(friend[friend.length - 1]);

// friend[2] = 'Billy'
// console.log(friend[friend.length - 1]);

// const jackko = ['Jackko', 'Zhang Ka Sing', 2004, friend];
// console.log(jackko);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// }

// const years = [1990, 1997, 2004, 2025];

// console.log(calcAge(years[0]));

//41# arrary operation
// const friends = ['Jackko', 'Mary', 'Coco'];

// // Add element
// const newlength = friends.push('Tom');
// console.log(friends);
// console.log(newlength);

// friends.unshift('Jenny');
// console.log(friends);

// //Delete element
// friends.pop(); //last
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first
// console.log(friends);
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf('Jackko')); //Find the index of element
// console.log(friends.indexOf('Mary'));
// console.log(friends.indexOf('Nick'));

// console.log(friends.includes('Jackko'));
// friends.push('23');
// console.log(friends.includes(23));

// if (friends.includes('Jackko')) {
//   console.log('You have a friend call Jackko')
// }

//#43 Introducion to object
// const jackkoArray = [
//   'Jackko',
//   'Zhang',
//   2025 - 2004,
//   'Student',
//   ['Sunny', 'Andrew', 'Jacky']
// ];

// console.log(jackkoArray);

// const jackko = {
//   firstName: 'Jackko',
//   lastName: 'Zhang',
//   age: 20,
//   job: 'Student',
//   friend: ['Sunny', 'Andrew', 'Jacky']
// };

// console.log(jackko);

// console.log(jackko.firstName);
// console.log(jackko.lastName);
// console.log(jackko['lastName']);

// const nameKey = 'Name';
// console.log(jackko['last' + nameKey]);
// console.log(jackko['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jackko? Choose between firstName, lastName, age, job, and friends');

// console.log(jackko[interestedIn]);
// if (jackko[interestedIn]) {
//   console.log(jackko[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jackko.location = 'Hong Kong';
// jackko['instagram'] = 'jackko_ks';
// console.log(jackko);

// const jonas = {
//   name: 'Jonas',
//   friend: ['Michael', 'Jackko', 'Sunny']
// };

// console.log(`${jonas.name} has ${jonas.friend.length} friends, and his best friend is called ${jonas.friend[0]}`);

//45#  Object Methods
const jackko = {
  firstName: 'Jackko',
  lastName: 'Zhang',
  birthYear: 2004,
  job: 'Student',
  friend: ['Sunny', 'Andrew', 'Jacky'],
  hasDriversLicense: true,

  // calcAge: function () {
  //   console.log(this);
  //   return 2025 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2025 - this.birthYear
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he ${this.hasDriversLicense ? 'has' : 'doesn\'t have'} a driver's lience.`
  }
};

console.log(jackko.calcAge());

console.log(jackko.getSummary());

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

const markHigher = function () { mark.bmi > john.bmi ? true : false };

console.log(`${markHigher ? mark.fullName : john.fullName}'s BMI (${markHigher ? mark.calcBMI() : john.calcBMI()}) is higher than ${!markHigher ? mark.fullName : john.fullName}'s (${!markHigher ? mark.calcBMI() : john.calcBMI()})!`);