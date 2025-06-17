'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firstName} are ${age} years old and born in ${birthYear}`;

//     if (!(birthYear >= 1981 && birthYear <= 2000)) {
//       var millenial = true;
//       const firstName = 'Jacky';
//       const a = 1;
//       const b = 2;
//       const str = `Oh, and you're not a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(a, b));
//       output = 'I love u';
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jackko';
// calcAge(2004);

// var me = 'Jackko';
// let job = 'internship';
// const birthYear = 2004;

// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// const lastName = 'Zhang';

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All product has been deleted.');
// }

// var x = 1;
// const y = 2;
// let z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAge(2004);

// const calcAgeArrow = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2004);

// const jackko = {
//   birthYear: 2004,
//   firstName: 'Jackko',
//   lastName: 'Zhang',
//   calcAge: function () {
//     console.log(this);
//     const age = 2025 - this.birthYear;
//     console.log(age);
//   },
// };

// jackko.calcAge();

// const mary = {
//   birthYear: 2007,
// };

// mary.calcAge = jackko.calcAge;
// mary.calcAge();

// const f = mary.calcAge;
// f();
// var firstName = 'Sunny';

// const jackko = {
//   birthYear: 2004,
//   firstName: 'Jackko',
//   lastName: 'Zhang',
//   calcAge: function () {
//     console.log(this);
//     const age = 2025 - this.birthYear;

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jackko.greet();
// console.log(this.firstName);
// jackko.calcAge();

// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 7, 9);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 9, 0);

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Zhang',
// };

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Wu';

// console.log(jessica1);
// console.log(marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Zhang',
  familiy: ['Abby', 'Kate'],
};

//shallow copy
const copyJessica = { ...jessica };
copyJessica.lastName = 'Davis';

// copyJessica.familiy.push('Jackko');
// copyJessica.familiy.push('Mark');

// console.log(copyJessica.familiy);
// console.log(jessica.familiy);

//Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Jackko');
jessicaClone.familiy.push('Mark');

console.log('Original:', jessica);
console.log('clone:', jessicaClone);
