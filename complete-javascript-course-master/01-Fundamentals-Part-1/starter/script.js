
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;
// let person = "Jonas"
// let PI = 3.1415;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'Programmer';
// let job2 = 'Teacher';

// let age = 20;

// true; //boolean
// console.log(typeof true);
// console.log(typeof "Jackko");

// let age = 30;
// age = 31;

// const birthYear = 2004;
// // birthYear = 2000; it will cause type error
// var job = "programmer";
// job = "Teacher";



// const now = 2025;
// const ageJackko = now - 20;
// const ageMonica = now - 16;
// console.log(ageJackko * 2, ageMonica / 2, 2 ** 8)

// const firstName = "Jackko";
// const lastName = " Zhang";

// console.log("Jackko" + " Zhang")
// console.log(ageJackko - ageMonica > ageMonica - ageJackko)

//17. String and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driver lience.");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

//20. Type Conversion and Coercion

// const inputYear = '2005';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 20);

// console.log(Number('Jackko'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //tpye coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / 2);

//21. Truthy and Falsy Values
//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jackko'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//   console.log("Dont spend it all!");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log('Yay! Height is defined')
// } else {
//   console.log('Height is undefined')
// }

// Equality Operators: == vs. ===
// const age = 18;
// if (age === '18') console.log('You just become an adult! (strick)');
// if (age == 18) console.log('You just become an adult! (loose)');

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 it is an amazing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7')
// }

// if (favourite !== 23) console.log('Why not 23?');

// const day = 'Thursday';

// switch (day) {
//   case 'Monday': // day==='Monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'Thusday':
//     console.log('Prepare the code materials');
//     break;
//   case 'Wednesday':
//   case 'Thursday':
//     console.log('Play Monster Hunter World');
//     break;
//   case 'Friday':
//     console.log('Happy Friday!');
//     break;
//   case 'Saturday':
//     console.log('Happy weekend!');
//     break;
//   case 'Sunday':
//     console.log('We should work tomorrow QwQ');
//     break;
//   default:
//     console.log("Invaild input");
// }

// 27. Statements and Expressions
// expression = produce a value
// statment = vice versa

// 3 + 4;
// 1991;
// true && false;

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jackko';
// console.log(`I am ${20} years old and my name is ${me}.`);

// ternary expression
// const age = 20;
// age >= 18 ? console.log('I like to drink wine') :
//   console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);