'use strict';

let arithmetic = module.exports = {};

// takes an array, returns true/false if every value is a number
const everyValueIsANumber = (values) => values.every((value) => typeof value === 'number');
const validateInput = (input) => {
  if (typeof input !== 'object') return null;
  if (input.length === 0) return null;
  if (!everyValueIsANumber(input)) return null;
};

arithmetic.add = function (...numbers) {
  if (typeof numbers !== 'object') return null;
  if (numbers.length === 0) return null;
  if (!everyValueIsANumber(numbers)) return null;
  return numbers.reduce((prev, curr) => prev + curr);
};

arithmetic.subtract = function (...numbers) {
  if (typeof numbers !== 'object') return null;
  if (numbers.length === 0) return null;
  if (!everyValueIsANumber(numbers)) return null;
  return numbers.reduce((prev, curr) => prev - curr);
};

arithmetic.multiply = function (...numbers) {
  if (typeof numbers !== 'object') return null;
  if (numbers.length === 0) return null;
  if (!everyValueIsANumber(numbers)) return null;
  return numbers.reduce((prev, curr) => prev * curr);
};

arithmetic.divide = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') { return null; }
  return a / b;
};
