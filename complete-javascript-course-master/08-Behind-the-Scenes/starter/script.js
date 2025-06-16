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

console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(2004);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAgeArrow(2004);

const jackko = {
  birthYear: 2004,
  firstName: 'Jackko',
  lastName: 'Zhang',
  calcAge: function () {
    console.log(this);
    const age = 2025 - this.birthYear;
    console.log(age);
  },
};

jackko.calcAge();

const mary = {
  birthYear: 2007,
};

mary.calcAge = jackko.calcAge;
mary.calcAge();
