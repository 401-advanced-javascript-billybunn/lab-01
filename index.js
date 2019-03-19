'use strict';
const faker = require('faker');
const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN')); // JOHN
console.log(math.add('not and object')); // null cause not a number
console.log(math.add()); // null cause empty
console.log(math.add(1, 3)); // 4
console.log(math.add(1, 3, 5)); // 9
console.log(math.add(1, 3, '5')); // null
console.log(math.add([])); // null

console.log(math.subtract(1, 3)); // -2
console.log(math.multiply(2, 3)); // 6
console.log(math.divide(6, 2)); // 3
