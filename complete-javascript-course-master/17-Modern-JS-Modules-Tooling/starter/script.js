// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');
// // console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('fish', 9);
add('pizza', 2);
add('apples', 5);

console.log(cart);
