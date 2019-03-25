'use strict';

let arithmetic = module.exports = {};

// takes an array, returns true/false if every value is a number
const everyValueIsANumber = (values) => values.every((value) => (typeof value) === 'number');
const validateInput = (input) => {
  if (typeof input !== 'object') return false;
  if (input.length === 0) return false;
  if (!everyValueIsANumber(input)) return false;
  return true;
};

arithmetic.add = function (...numbers) {
  if(!validateInput(numbers)) return null; 
  return numbers.reduce((prev, curr) => prev + curr);
};

arithmetic.subtract = function (...numbers) {
  if(!validateInput(numbers)) return null; 
  return numbers.reduce((prev, curr) => prev - curr);
};

arithmetic.multiply = function (...numbers) {
  if(!validateInput(numbers)) return null; 
  return numbers.reduce((prev, curr) => prev * curr);
};

arithmetic.divide = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') { return null; }
  return a / b;
};
