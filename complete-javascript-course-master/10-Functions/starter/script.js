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
    this.booking.push({
      flight: `${this.iatacode}${flightNum}`,
      name,
    });
  },
};
cathay.book('0987654321', 'Jackko');
console.log(cathay);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  booking: [],
};

const book = cathay.book;
// does not work
// book(234, 'Jacky');
book.call(eurowings, 234, 'Sunny Lai');
console.log(eurowings);

book.call(cathay, 456, 'Andrew');
console.log(cathay);

const swiss = {
  airline: 'Swiss',
  iatacode: 'LX',
  booking: [],
};
book.call(swiss, 456, 'Andrew');

// Apply method
const flightData = [596, 'Jenny Li'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//#141 The call and apply method
// bind method
// book.call(eurowings, 234, 'Sunny Lai');

const bookEW = book.bind(eurowings);
const bookHKG = book.bind(cathay);
const bookLX = book.bind(swiss);

bookEW(23, 'Peter Wong');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nokk Tsuang');

//with Event Listeners
cathay.planes = 300;
cathay.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', cathay.buyPlane);
