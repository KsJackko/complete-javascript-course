'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP - A Digital Banking Application
// Features: Login, Money Transfer, Loan Request, Account Closure, Automatic Logout

/////////////////////////////////////////////////
// Data Section

// Account data with movement dates, currency and locale information for internationalization

// Account 1 - Jonas Schmedtmann (Portuguese locale, EUR currency)
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300], // Array of account movements (deposits and withdrawals)
  interestRate: 1.2, // Interest rate percentage
  pin: 1111, // Account PIN for authentication

  movementsDates: [
    // Corresponding dates for each movement
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2025-06-18T17:01:17.194Z',
    '2025-06-20T23:36:17.929Z',
    '2025-06-23T10:51:36.790Z',
  ],
  currency: 'EUR', // Account currency
  locale: 'pt-PT', // Locale for number and date formatting
};

// Account 2 - Jessica Davis (US locale, USD currency)
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], // Array of account movements
  interestRate: 1.5, // Interest rate percentage
  pin: 2222, // Account PIN for authentication

  movementsDates: [
    // Corresponding dates for each movement
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD', // Account currency
  locale: 'en-US', // Locale for number and date formatting
};

// Array containing all account objects
const accounts = [account1, account2];

/////////////////////////////////////////////////
// DOM Elements Selection
// Labels for displaying information
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

// Containers
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// Buttons
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// Input fields
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Utility Functions

/**
 * Formats movement dates to display as relative time or formatted date
 * @param {Date} date - The date to format
 * @param {string} locale - Locale for date formatting
 * @returns {string} Formatted date string
 */

const formatMovementDate = function (date, locale) {
  // Helper function to calculate days passed between two dates
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), date);
  console.log(daysPassed);

  // Return relative time strings for recent dates
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // For older dates, return formatted date according to locale
  const movementDate = new Intl.DateTimeFormat(locale).format(date);
  return movementDate;
};

/**
 * Formats currency values according to locale and currency type
 * @param {number} value - The value to format
 * @param {string} locale - Locale for number formatting
 * @param {string} currency - Currency code (EUR, USD, etc.)
 * @returns {string} Formatted currency string
 */
const formatCur = function (value, locale, currency) {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
  return formattedValue;
};

/**
 * Displays account movements (transactions) in the UI
 * @param {Object} acc - Account object containing movements data
 * @param {boolean} sort - Whether to sort movements by amount (default: false)
 */
const displayMovements = function (acc, sort = false) {
  // Clear existing movements display
  containerMovements.innerHTML = '';

  // Sort movements if requested, otherwise use original order
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // Create HTML for each movement
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // Determine transaction type

    // Format the movement date
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, currentAccount.locale);

    // Format the movement amount with proper currency
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // Create HTML template for movement row
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    // Insert the HTML at the beginning of the movements container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/**
 * Calculates and displays the current account balance
 * @param {Object} acc - Account object
 */
const calcDisplayBalance = function (acc) {
  // Calculate total balance by summing all movements
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // Display formatted balance in the UI
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

/**
 * Calculates and displays account summary (income, outgoing, interest)
 * @param {Object} acc - Account object
 */
const calcDisplaySummary = function (acc) {
  // Calculate total income (positive movements)
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  // Calculate total outgoing (negative movements)
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  // Calculate interest earned on deposits
  const interest = acc.movements
    .filter(mov => mov > 0) // Only on deposits
    .map(deposit => (deposit * acc.interestRate) / 100) // Calculate interest
    .filter((int, i, arr) => {
      // Only count interest >= 1 unit of currency
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0); // Sum all interest
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

/**
 * Creates usernames for all accounts based on owner names
 * Username is created from first letters of each name part
 * @param {Array} accs - Array of account objects
 */
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// Initialize usernames for all accounts
createUsernames(accounts);

/**
 * Updates the entire UI with current account data
 * @param {Object} acc - Current account object
 */
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

/**
 * Starts the automatic logout timer (5 minutes)
 * @returns {number} Timer ID for clearing the timer
 */
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // Display remaining time in UI
    labelTimer.textContent = `${min}:${sec}`;

    // When time reaches 0, log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease time by 1 second
    time--;
  };

  // Set initial time to 5 minutes (300 seconds)
  let time = 300;

  // Call tick immediately, then every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event Handlers Section
// Global variables for current logged-in account and timer
let currentAccount, timer;

// DEVELOPMENT MODE: Uncomment to automatically log in (for testing)
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

/**
 * Login Button Event Handler
 * Validates user credentials and logs them into the application
 */
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting and refreshing the page
  e.preventDefault();

  // Find account with matching username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // Check if account exists and PIN is correct
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message with first name
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Show the main application interface
    containerApp.style.opacity = 100;

    // Create and display current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long', // Uncomment to show day of the week
    };
    const locale = currentAccount.locale;
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    // Clear input fields and remove focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Clear any existing timer and start a new logout timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update the user interface with account data
    updateUI(currentAccount);
  }
});

/**
 * Transfer Money Button Event Handler
 * Handles money transfers between accounts
 */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  // Find the recipient account
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  // Validate transfer conditions
  if (
    amount > 0 && // Amount must be positive
    receiverAcc && // Recipient account must exist
    currentAccount.balance >= amount && // Sufficient balance
    receiverAcc?.username !== currentAccount.username // Can't transfer to self
  ) {
    // Execute the transfer
    currentAccount.movements.push(-amount); // Deduct from sender
    receiverAcc.movements.push(amount); // Add to recipient

    // Add transfer dates to both accounts
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI and reset timer
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

/**
 * Request Loan Button Event Handler
 * Handles loan requests (requires 10% deposit history)
 */
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // Round down to nearest integer

  // Check loan eligibility: amount > 0 and user has deposited at least 10% of loan amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Simulate loan processing delay
    setTimeout(function () {
      // Add loan amount to account
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500); // 2.5 second delay
  }

  // Clear input field and reset timer
  inputLoanAmount.value = '';
  clearInterval(timer);
  timer = startLogOutTimer();
});

/**
 * Close Account Button Event Handler
 * Allows users to permanently delete their account
 */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // Verify user credentials before account deletion
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    // Find account index in the accounts array
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Remove account from accounts array
    accounts.splice(index, 1);

    // Hide the application interface
    containerApp.style.opacity = 0;
  }

  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
});

/**
 * Sort Movements Button Event Handler
 * Toggles between chronological and sorted (by amount) display of movements
 */
let sorted = false; // Track current sort state
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // Toggle sort state and update display
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE SECTION - LEARNING EXAMPLES
// The following code demonstrates various JavaScript concepts

// Examples of Converting and Checking Numbers
// console.log(23 === 23.0);

// // Base 10 - 0 to 9
// // Binary base 2 - 0 to 1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Number Conversion Examples
// console.log(Number('23'));
// console.log(+'23');

// // Parsing Examples
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// // Number Validation Examples
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
// console.log(Number.isInteger(23.5));

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite(13.009));

// // Math Object Examples
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// // Math.max includes type coercion
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '13', 11, 2));

// console.log(Math.max(5, 18, '13px', 11, 2));
// console.log(Math.PI);

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // Random number generation
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// // Rounding integers
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.6));

// console.log(Math.floor(23.6));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// // The remainder operator examples
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(12));
// console.log(isEven(7));

// // Styling every nth row example
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((each, i) => {
//     if (i % 2 === 0) each.style.backgroundColor = 'red';
//     if (i % 3 === 0) each.style.backgroundColor = 'blue';
//   });
// });

// // Numeric separators examples
// const diameter = 287_4600_00_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1415;
// console.log(PI);

// console.log(+'233000');

// // Working with BigInt examples
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(387573587197385177670318578361n);
// console.log(BigInt(284797592757));

// // BigInt operations
// console.log(1000n + 1000n);
// console.log(8342747297254834895980n * 3737n);
// const huge = 236389183618481639n;
// const num = 23;
// console.log(huge * BigInt(num));

// // BigInt comparison exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// // BigInt divisions
// console.log(11n / 3n);
// console.log(10 / 3);

// // Creating dates examples
/*
const now = new Date();
console.log(now);

console.log(new Date('Jun 23 2025 22:05:23'));
console.log(new Date('December 24, 2004'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2025, 12, 24, 10, 10, 10));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

// Working with dates examples
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

// Date calculations examples
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcdaysPassed = (date1, date2) =>
//   (date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// console.log((new Date() - new Date(2020, 7, 12)) / (1000 * 60 * 60 * 24));

// Internationalizing Numbers (Intl) examples
// const num = 388453.23;
// const options = {
//   style: 'currency',
//   currency: 'HKD',
// };
// console.log('US', new Intl.NumberFormat('en-US', options).format(num));
// console.log('HK', new Intl.NumberFormat('en-HK', options).format(num));
// console.log('Germany', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log('Navigator', new Intl.NumberFormat(navigator.language).format(num));

// setTimeout and setInterval examples
// const ingredients = ['olives', 'spinach'];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.`),
//   3000,
//   ingredients.at(0),
//   ingredients.at(1)
// );

// if (ingredients.includes('olives')) {
//   clearTimeout(pizzaTimer);
//   console.log('Your pizza have been cancel');
// }

// // Digital clock example using setInterval
// setInterval(function () {
//   const now = new Intl.DateTimeFormat(navigator.locale, {
//     hour: 'numeric',
//     minute: 'numeric',
//     day: 'numeric',
//     month: 'numeric',
//     year: 'numeric',
//     second: 'numeric',
//   }).format(new Date());
//   console.log(now);
// }, 1000);
