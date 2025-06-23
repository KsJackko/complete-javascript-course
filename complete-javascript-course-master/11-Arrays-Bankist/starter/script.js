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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
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

let currentAccount;

const displayUI = function () {
  // display balance
  calcPrintBalance(currentAccount);
  // display movement
  displayMovement(currentAccount);
  // display summary
  calcDisplaySummary(currentAccount);
};

const displayMovement = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach((mov, i) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}€</div>
       </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = balance + ' EUR';
  account.balance = balance;
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((arr, mov) => arr + mov);
  labelSumIn.textContent = `${income}€`;
  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((arr, mov) => arr + mov);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (account.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Map method, create username
const createUsername = function (account) {
  account.forEach(function (each) {
    each.username = each.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

// Login in button
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  inputLoginUsername.value = inputLoginPin.value = '';
  // finding account
  currentAccount = accounts.find(acc => acc.username === username);
  // correct credentials
  if (currentAccount?.pin === pin) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    // display UI
    displayUI();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  // check if account exist
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // add negative or positive movement
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    transferTo.username !== currentAccount.username &&
    transferTo
  ) {
    currentAccount.movements.push(-amount);
    transferTo.movements.push(amount);
  }

  displayUI();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (currentAccount.movements.some(mov => mov >= amount * 0.01))
    currentAccount.movements.push(inputLoanAmount.value);
  displayUI();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // if (sorted === false) {
  //   displayMovement(currentAccount, true);
  //   sorted = true;
  // } else {
  //   displayMovement(currentAccount, false);
  //   sorted = false;
  // }
  displayMovement(currentAccount, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
// const checkDogs = function (dogsJulia, dogsKate) {
//   const output = function (dog, i) {
//     const type = dog >= 3 ? 'adult' : 'puppy';
//     type === 'adult'
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   };
//   dogsJulia.splice(0, 1);
//   dogsJulia.splice(-2, 2);
//   dogsJulia.forEach(output);
//   console.log('---');
//   dogsKate.forEach(output);
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// #158 Map method
// const hkdToJpy = 18.61;
// const movementJpy = movements.map(function (mov) {
//   return mov * hkdToJpy;
// });
// const movementJpy = movements.map(mov => mov * hkdToJpy);
// console.log(movementJpy);

// const movementJpyFor = [];
// for (const each of movements) movementJpyFor.push(each * hkdToJpy);
// console.log(movementJpyFor);

// const movementDescriptions = movements.map((mov, i) => {
//   return `Movement${i}, You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;
// });

// console.log(movementDescriptions);

// 159 filter method
// const deposit = movements.filter(mov => {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposit);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //Reduce method
// const balance = movements.reduce((acc, cur, i) => acc + cur, 0);
// console.log(balance);

// //Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc < mov) return mov;
//   else return acc;
// }, movements[0]);
// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const dogAge = ages.map(age => {
//     if (age <= 2) return 2 * age;
//     else if (age > 2) return 16 + age * 4;
//   });
//   console.log(dogAge);
//   const adultDogs = dogAge.filter(age => age >= 18);
//   console.log(adultDogs);
//   const avgDogsAge = adultDogs.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   console.log(avgDogsAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const dogAge = ages.map(age => {
//     if (age <= 2) return 2 * age;
//     else if (age > 2) return 16 + age * 4;
//   });
//   console.log(dogAge);
//   const adultDogs = dogAge.filter(age => age >= 18);
//   console.log(adultDogs);
//   const avgDogsAge = adultDogs.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   console.log(avgDogsAge);
// };

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => {
//       if (age <= 2) return 2 * age;
//       else if (age > 2) return 16 + age * 4;
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg);

// Find method: find method only return the first element of the condition, not return an array.
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
// const findAccount = function (accounts) {
//   for (const account of accounts)
//     if (account.owner === 'Jessica Davis') return account;
// };

// console.log(findAccount(accounts));

// findLast method
// console.log(movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// //some and every
// console.log(movements);
// //EQUALITY
// console.log(movements.includes(-130));
// //SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// //EVERY
// console.log(movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));

// //Flat method
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// console.log(accountMovements.flat());
// console.log(accountMovements.flat().reduce((acc, mov) => acc + mov, 0));
// // flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// //1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// const huskyWeight = breeds.find(each => each.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// //2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// const dogBothActivities = breeds.find(
//   each =>
//     each.activities.includes('running') && each.activities.includes('fetch')
// ).breed;
// console.log(dogBothActivities);
// //3. Create an array "allActivities" of all the activities of all the dog breeds
// const allActivities = breeds.map(each => each.activities).flat();
// console.log(allActivities);
// //4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// //5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(each => each.activities.includes('swimming'))
//       .flatMap(each => each.activities)
//       .filter(each => each !== 'swimming')
//   ),
// ];
// console.log(swimmingAdjacent);
// //6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// const isAverageWeightGreater = breeds.some(each => each.averageWeight >= 10);
// console.log(isAverageWeightGreater);
// //7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// const isActive = breeds.some(each => each.activities.length >= 3);
// console.log(isActive);

// //String
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// //Number
// // return < 0, A, B
// // return > 0, B, A
// // ascending
// console.log(movements);
// movements.sort((a, b) => a - b);
// console.log(movements);

// //descending
// movements.sort((a, b) => b - a);
// console.log(movements);

// console.log(movements);

// //  Object.groupBy()
// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'deposits' : 'withdrawals'
// );
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;
//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'active';
//   if (movementCount >= 1) return 'moderate';
// });

// console.log(groupedByActivity);

// const groupedByType = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedByType);

// const groupedByInterst = Object.groupBy(
//   accounts,
//   account => account.interestRate
// );
// console.log(groupedByInterst);

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

// const x = new Array(7);
// console.log(x);
// x.fill(1);
// console.log(x);

// const y = [, , , , , ,];
// y.fill(2, 1, 3);
// console.log(y);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.fill(23, 2, 6);
// console.log(arr);

// //Array.from
// const z = Array.from({ length: 8 }, (_, i) => i + 1);
// console.log(z);

// const diceRoll = Array.from(
//   { length: 100 },
//   (_, i) => Math.trunc(Math.random() * 6) + 1
// );
// console.log(diceRoll);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// ///////////////////////////////////////
// // Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

// console.log(movements);
// //const reversedMov = movements.slice().reverse(movements);
// const reversedMov = movements.toReversed();
// console.log(movements);
// console.log(reversedMov);

// const newMovements = movements.with(1, 2000);
// console.log(newMovements);
// console.log(movements);

///////////////////////////////////////
// Array Methods Practice

//1.
const allDeposits = accounts
  .flatMap(each => each.movements)
  .filter(mov => mov > 0)
  .reduce((acc, dep) => acc + dep);
console.log(allDeposits);

//2.
const allDepositsGreater1000 = accounts
  .flatMap(each => each.movements)
  .filter(mov => mov >= 1000).length;
console.log(allDepositsGreater1000);

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

// //1.
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
//   { weight: 18, curFood: 244, owners: ['Joe'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(
//   each => (each.recommendedFood = Math.floor(each.weight ** 0.75 * 28))
// );
// console.log(dogs);

// //2.
// const sarahsDog = dogs.find(each => each.owners.includes('Sarah'));
// console.log(
//   sarahsDog.curFood > sarahsDog.recommendedFood ? 'Too much!' : 'Too little!'
// );

// //3.
// const groupByFoodPortion = Object.groupBy(dogs, each => {
//   if (each.curFood > each.recommendedFood) return 'ownersEatTooMuch';
//   if (each.curFood < each.recommendedFood) return 'ownersEatTooLittle';
// });
// const ownersEatTooMuch = [
//   ...new Set(
//     groupByFoodPortion.ownersEatTooMuch.map(each => each.owners).flat()
//   ),
// ];
// const ownersEatTooLittle = [
//   ...new Set(
//     groupByFoodPortion.ownersEatTooLittle.map(each => each.owners).flat()
//   ),
// ];
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// //4.
// const outputEatTooMuch = `${ownersEatTooMuch.join(
//   ' and '
// )}'s dogs eat too much!`;
// const outputEatTooLittle = `${ownersEatTooLittle.join(' and ')}'s dogs eat
// too little!`;

// console.log(outputEatTooMuch);
// console.log(outputEatTooLittle);

// //5.
// console.log(dogs.some(each => each.curFood === each.recommendedFood));

// //6.
// const isEatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.every(isEatingOkay));

// //7.
// const okayDogs = dogs.filter(isEatingOkay);
// console.log(okayDogs);

// //8.
// const groupByFoodPortion2 = Object.groupBy(dogs, each => {
//   if (each.curFood > each.recommendedFood) return 'too-much';
//   if (each.curFood < each.recommendedFood) return 'too-little';
//   if (each.curFood === each.recommendedFood) return 'exact';
// });
// console.log(groupByFoodPortion2);
// //9.
// const groupByOwner = Object.groupBy(dogs, each => each.owners.length);
// console.log(groupByOwner);
// //10.
// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);
