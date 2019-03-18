'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('improper use of arithmetic.add()', () => {
  it('returns null if invoked with no arguments', () => {
    expect(arithmetic.add()).toBeNull();
  });
  it('returns null if invoked with only one argument', () => {
    expect(arithmetic.add(8)).toBeNull();
  });
  it('returns null if invoked with an argument that isn\'t a number', () => {
    expect(arithmetic.add('1', 2)).toBeNull();
  });
  it('ignores any arguments passed in after the first two', () => {
    expect(arithmetic.add(1, 2, 3)).toBe(3);
  });
});

describe('improper use of arithmetic.subtract()', () => {
  it('returns null if invoked with no arguments', () => {
    expect(arithmetic.subtract()).toBeNull();
  });
  it('returns null if invoked with only one argument', () => {
    expect(arithmetic.subtract(8)).toBeNull();
  });
  it('returns null if invoked with an argument that isn\'t a number', () => {
    expect(arithmetic.subtract(2, '1')).toBeNull();
  });
  it('ignores any arguments passed in after the first two', () => {
    expect(arithmetic.subtract(1, 2, 3)).toBe(-1);
  });
});

describe('proper use of arithmetic.add()', () => {
  it('adds two positive numbers', () => {
    expect(arithmetic.add(1, 2)).toBe(3);
  });
  it('adds two negative numbers', () => {
    expect(arithmetic.add(-1, -2)).toBe(-3);
  });
  it('adds a positive and a negative number', () => {
    expect(arithmetic.add(1, -2)).toBe(-1);
  });
});

describe('proper use of arithmetic.subtract()', () => {
  it('subtracts two positive numbers', () => {
    expect(arithmetic.subtract(1, 2)).toBe(-1);
  });

  it('subtracts two negative numbers', () => {
    expect(arithmetic.subtract(-1, -2)).toBe(1);
  });

  it('subtracts a positive and a negative number', () => {
    expect(arithmetic.subtract(1, -2)).toBe(3);
  });
});
