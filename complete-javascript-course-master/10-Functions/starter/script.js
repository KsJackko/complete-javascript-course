'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = '$100') {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('CHS1124');
// createBooking('PHI1209', 2, 88);
// createBooking('PHI1209', undefined, 88);

//#138 fucntions accept callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
console.log(oneWord('Jackko'));
console.log(upperFirstWord('i love u'));

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original str: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

// JS use callbacks all the time
const high5 = function () {
  console.log('Hi');
};

document.body.addEventListener('click', high5);

['Jackko', 'Jackko2', 'Jackko3'].forEach(high5);

//#139 Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting}, ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jackko');

greet('Hello')('Jackko');

//#140 The call and apply method
const cathay = {
  airline: 'Cathay',
  iatacode: 'HKG',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} books a seat on ${this.airline} flight ${flightNum} ${this.iatacode}`
    );
  },
};
cathay.book('0987654321', 'Jackko');
