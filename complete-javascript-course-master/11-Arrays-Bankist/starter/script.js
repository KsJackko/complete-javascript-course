'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 3
    }${type}</div>
          <div class="movements__value">${mov}€</div>
       </div>`;
    containerMovements.insertAdjacentHTML('beforeEnd', html);
  });
};

displayMovement(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// let myName = ['j', 'a', 'c', 'k', 'k', 'o', '-'];
// console.log(myName.splice(-1));
// console.log(myName);
// myName.splice(3, 4);
// console.log(myName);

// //REVERSE
// let myName2 = ['j', 'a', 'c', 'k', 'k', 'o'];
// console.log(myName2.reverse());
// console.log(myName2);

// //CONCAT
// let lastName = ['Z', 'H', 'A', 'N', 'G'];
// const name = myName2.concat(lastName);
// console.log(name);

// //JOIN
// console.log(name.join('-'));

// // AT Method
// console.log(lastName.at(0));
// console.log(lastName[0]);

// console.log(lastName.at(-1));
// console.log(lastName[lastName.length - 1]);

// //Looping Array: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement${i}, You deposited ${movement}`);
//   } else {
//     console.log(`Movement${i}, You withdraw ${Math.abs(movement)}`);
//   }
// }

// // Can't use break and continuse
// movements.forEach(function (movement, i, movements) {
//   if (movement > 0) {
//     console.log(`Movement${i}, You deposited ${movement}`);
//   } else {
//     console.log(`Movement${i}, You withdraw ${Math.abs(movement)}`);
//   }
// });

// // forEach for Map and Set
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const output = function (dog, i) {
    const type = dog >= 3 ? 'adult' : 'puppy';
    type === 'adult'
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  };
  const newdogsJulia = dogsJulia.slice(1, -2);
  newdogsJulia.forEach(output);
  console.log('---');
  dogsKate.forEach(output);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
