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
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// console.log(oneWord('Jackko'));
// console.log(upperFirstWord('i love u'));

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original str: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// // JS use callbacks all the time
// const high5 = function () {
//   console.log('Hi');
// };

// document.body.addEventListener('click', high5);

// ['Jackko', 'Jackko2', 'Jackko3'].forEach(high5);

// //#139 Functions Returning Functions
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting}, ${name}`);
// //   };
// // };

// const greet = greeting => name => console.log(`${greeting}, ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jackko');

// greet('Hello')('Jackko');

// //#140 The call and apply method
// const cathay = {
//   airline: 'Cathay',
//   iatacode: 'HKG',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} books a seat on ${this.airline} flight ${flightNum} ${this.iatacode}`
//     );
//     this.booking.push({
//       flight: `${this.iatacode}${flightNum}`,
//       name,
//     });
//   },
// };
// cathay.book('0987654321', 'Jackko');
// console.log(cathay);

// const eurowings = {
//   airline: 'Eurowings',
//   iatacode: 'EW',
//   booking: [],
// };

// const book = cathay.book;
// // does not work
// // book(234, 'Jacky');
// book.call(eurowings, 234, 'Sunny Lai');
// console.log(eurowings);

// book.call(cathay, 456, 'Andrew');
// console.log(cathay);

// const swiss = {
//   airline: 'Swiss',
//   iatacode: 'LX',
//   booking: [],
// };
// book.call(swiss, 456, 'Andrew');

// // Apply method
// const flightData = [596, 'Jenny Li'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //#141 The call and apply method
// // bind method
// // book.call(eurowings, 234, 'Sunny Lai');

// const bookEW = book.bind(eurowings);
// const bookHKG = book.bind(cathay);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Peter Wong');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Nokk Tsuang');

// //with Event Listeners
// cathay.planes = 300;
// cathay.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', cathay.buyPlane.bind(cathay));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// // const addTax = (value) => value+value*0.23;

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = addTaxRate(0.23);

// console.log(addVAT(200));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     this.options.unshift(this.question);
//     const str = this.options.join('\n');
//     //Display a prompt window for the user
//     const choice = Number(prompt(str));
//     // Based on the input number, update the answers array.
//     typeof choice === 'number' && choice >= 0 && choice < this.answers.length
//       ? this.answers[choice]++
//       : console.log('Invalid input !');
//     this.displayResult();
//     this.displayResult('string');
//   },
//   displayResult(type = 'array') {
//     type === 'array'
//       ? console.log(`[${this.answers.join(', ')}]`)
//       : console.log(`Poll results are ${this.answers.join(', ')}`);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResult.call({ answers: [5, 2, 3] });
// poll.displayResult.call({ answers: [5, 2, 3] }, 'string');

// poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Immediately invoked function expressions

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// (() => console.log('This will never run again'))();

// closures
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 999;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.log(f);

// h();
// f();
// console.log(h);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(
//       `There are three group, each group include ${perGroup} passengers`
//     );
//   }, 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(1800, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
