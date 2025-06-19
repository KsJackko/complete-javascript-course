'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
//Set 2
// const commonfoods = italianFoods.intersection(mexicanFoods);
// console.log(commonfoods);

// const italianMexicanFusion = mexicanFoods.union(italianFoods);
// console.log(italianMexicanFusion);

// console.log(new Set([...italianFoods, ...italianFoods]));
// console.log(...italianMexicanFusion);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference italian:', uniqueItalianFoods);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainInedx) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainInedx]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// #129 Working with string part 3
// split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jackko Zhang'.split(' '));

// const [firstName, lastName] = 'Jackko Zhang'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jackko zhang';
// const capitalizeName = function (name) {
//   const splitName = name.split(' ');
//   const joinName = [];
//   for (const x of splitName) {
//     // joinName.push(x[0].toUpperCase() + x.slice(1));
//     joinName.push(x.replace(x[0], x[0].toUpperCase()));
//   }
//   console.log(joinName.join(' '));
// };
// capitalizeName(passenger);
// // Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(36, '+'));
// console.log('Jackko'.padStart(23, '+').padEnd(40, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   console.log(str.slice(-4).padStart(str.length, '*'));
// };
// maskCreditCard(1234567890);
// maskCreditCard('auaiobeubfbauf');

// //repeat
// const message2 = 'Bad waether... All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'飞机'.repeat(n)}.`);
// };
// planesInLine(5);
// // #129 Working with string part 2
// const passenger = 'jaCkKO';
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'jackkozhang@gmail.com';
// const loginEmail = ' JAckkozhang@gmail.com  \n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const emailCorrect = lowerEmail.trim();
// // console.log(emailCorrect);
// const normalizaedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizaedEmail);

// //replacing
// const priceHKD = '29999HKD';
// const priceUS = priceHKD.replace('HKD', '$');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate').replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// //Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// const plane2 = 'Airbus A320neo';
// if (plane2.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New airbus familiy');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('Knife')) {
//     console.log('You are NOT allowed on board.');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// #128 Working with string part 1
// const airline = 'HK International Airport';
// const plane = 'a320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('K'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('Airport'));

// console.log(airline.slice(3));
// console.log(airline.slice(3, 16));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-7));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// Maps: iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again'],
// ]);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
// #Map: fundamentals
// const rest = new Map();
// rest.set('name', 'Jackko Zhang');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// const time = 8;
// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));

// console.log(rest.get(arr));
//Set
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('Jackko'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Pasta'));
// orderSet.add('Garlic bread');
// orderSet.delete('Pizza');
// console.log(orderSet);

// for (const food of orderSet) console.log(food);

// const staffList = ['chef', 'waiter', 'manager', 'waiter', 'ceo'];
// const staffType = [...new Set(staffList)];
// for (const staff of staffType) console.log(staff);

// console.log(new Set(['chef', 'waiter', 'manager', 'waiter', 'ceo']).size);
// console.log(new Set('Jackko').size);

// #Looping Object, values, entries
// console.log(Object.keys(openingHours));
// console.log(Object.entries(openingHours));

// const values = Object.values(openingHours);
// console.log(values);
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, open hour is ${open} to ${close}`);
// }
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const hours of Object.values(openingHours)) {
//   console.log(hours);
// }

// for (const [day, hours] of Object.entries(openingHours)) {
//   console.log(`${day}: ${hours.open}-${hours.close}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, open at ${open}.`);
// }
// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

// // Arrays
// const users = [
//   {
//     name: 'Jackko',
//     email: 'jackkozhang@gmail.com',
//   },
// ];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('User array empty');
// }
// for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   let order = 1;
//   const variable = document.querySelector('textarea').value;
//   const arr = variable.split('\n');
//   for (const rowVariable of arr) {
//     const [left, right] = rowVariable.trim().toLowerCase().split('_');
//     const finalVariable = left + right[0].toUpperCase() + right.slice(1);
//     console.log(finalVariable.padEnd(20, ' ') + '✅'.repeat(order));
//     order++;
//   }
// });
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// //1.
// const arr = [...gameEvents.values()];
// console.log(arr);
// const events = new Set(arr);
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// //4.
// for (const [time, event] of gameEvents) {
//   time <= 45
//     ? console.log(`[FIRST HALF], ${time}: ${event}`)
//     : console.log(`[SECOND HALF], ${time}: ${event}`);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//1.
// const entries = Object.entries(game.scored);
// for (const [goal, player] of entries) {
//   console.log(`Goal ${goal}: ${player}`);
// }
// //2.
// const values = Object.values(game.odds);
// let avg = 0;
// for (const x of values) {
//   avg += x / values.length;
// }
// console.log(avg);
// //3.
// const odds = Object.entries(game.odds);
// for (const [team, odd] of odds) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
//  //bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] === 1 ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// for (const [team, odd] of odds) {
//   team !== 'x'
//     ? console.log(`Odd of victory ${game[team]} ${odd}`)
//     : console.log(`Odd of draw: ${odd}`);
// }
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// //1.
// const [players1, players2] = game.players;
// //2.
// const [gk, ...fieldPlayers] = players1;
// //3.
// const allplayers = [...players1, ...players2];
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// //5.
// // const {odds: {team1, x:draw, team2}} = game;
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...playerName) {
//   for (let i = 0; i < playerName.length; i++) {
//     console.log(playerName[i]);
//   }
//   console.log(playerName.length);
// };
// //6.
// team1 > team2 && console.log('Team1 is more likely to win.');
// team2 > team1 && console.log('Team2 is more likely to win.');

// console.log([...menu.entries()]);
// console.log(menu.entries());
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
//   // numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANOYMOUS>';
// rest2.owner = rest2.owner && '<ANOYMOUS>';

// rest1.owner &&= '<ANOYMOUS>';
// rest2.owner &&= '<ANOYMOUS>';

// console.log(rest1);
// console.log(rest2);

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//The nullish Coalescing Operator(??)
// restaurant.guestNum = 0;
// const guest2 = restaurant.guestNum || 10;
// console.log(guest2);

// // Nullish: null and undefined(NOT 0 or '')
// const guestCorrect = restaurant.guestNum ?? 10;
// console.log(guestCorrect);

// #113 short-circuiting
// console.log(3 || 'Jackko');
// console.log('' || 'Jackko');
// console.log(true || 0);
// console.log(undefined || null);

// const guest1 = restaurant.guestNum ? restaurant.guestNum : 10;
// console.log(guest1);

// const guest2 = restaurant.guestNum || 10;
// console.log(guest2);

// console.log('----AND----');
// console.log(0 && 'Jackko');
// console.log(7 && 'Jackko');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// // #112 Rest pattern and parameters
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'olives', 'chili');
// restaurant.orderPizza('Mushrooms');

// //#111 The spead operater
// const ingrediens = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Let's make pasta! Ingredient 2?"),
//   // prompt("Let's make pasta! Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingrediens);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu];
// const wholeMenu = [...mainMenuCopy, ...menu];
// console.log(...wholeMenu);

// // Iterables: arrays, strings, maps, sets. Not object
// const str = 'Jackko';
// const letter = [...str, '', 'Zhang'];
// console.log(letter);
// console.log(...str);

// //Objects
// const newRestaurant = { ...restaurant, founder: 'Jackko' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'xyzueiw';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// #110 Destructuring objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// #109 Destructuring Arrays
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const [firstBook, secondBook] = books;
// console.log([firstBook, secondBook]);
// const [, , thirdBook] = books;
// console.log([, , thirdBook]);
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingCount]] = ratings;
// console.log([rating, ratingCount]);
// const ratingStars = [63405, 1808];
// const [fiveStarRating, oneStarRattings, threeStarRatings = 0] = ratingStars;
// console.log([fiveStarRating, oneStarRattings, threeStarRatings]);
