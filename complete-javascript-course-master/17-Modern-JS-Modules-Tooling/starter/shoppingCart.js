// Exporting module

console.log('Exporting module');

//Blocking code
/*
console.log('Start blocking');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching users');
*/

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
console.log(cart);
const totalPrice = 123;
const totalQuantity = 200;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

console.log(cart);
