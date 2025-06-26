'use strict';

/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jackko = new Person('Jackko', 2004);
console.log(jackko);

const jacky = new Person('Jacky', 2005);
console.log(jacky);

console.log(jackko instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jackko.calcAge();
jacky.calcAge();

console.log(jackko.__proto__);
console.log(jackko.__proto__ === Person.prototype);

// .prototypeOfLinkedObject
Person.prototype.species = 'Homo Sapiens';
console.log(jackko.species);
console.log(jackko.hasOwnProperty('species'));
console.log(jackko.hasOwnProperty('birthYear'));

// Object.prototype (top of prototype chain)
console.log(jackko.__proto__);
console.log(jackko.__proto__.__proto__);
console.log(jackko.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]; // new Array === []
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log(arr.__proto__);

const h1 = document.querySelector('h1');
console.dir(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
console.log(bmw.__proto__);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
console.log(mercedes.__proto__);
mercedes.accelerate();
mercedes.brake();
*/

// class expression
// class PersonCl = class{}

// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.fullName);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.age);
console.log(jessica);
PersonCl.hey();
console.log('----------');
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const account = {
  owner: 'jackko',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account);
account.latest = 50;
console.log(account.movements);

account.type = function () {
  console.log('China bank');
};
*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;

. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    const currentSpeed = this.speed / 1.6;
    return `${currentSpeed} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, I'm studying ${this.course}.`);
};

const jackko = new Student('Jackko', 2004, 'Computer Science');
jackko.introduce();
console.dir(jackko.__proto__);
console.dir(jackko.__proto__.__proto__);
// jackko.calcAge();
