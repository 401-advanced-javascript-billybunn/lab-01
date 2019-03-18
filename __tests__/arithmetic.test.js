'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('IMPROPER USE', () => {
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

  describe('improper use of arithmetic.multiply()', () => {
    it('returns null if invoked with no arguments', () => {
      expect(arithmetic.multiply()).toBeNull();
    });
    it('returns null if invoked with only one argument', () => {
      expect(arithmetic.multiply(8)).toBeNull();
    });
    it('returns null if invoked with an argument that isn\'t a number', () => {
      expect(arithmetic.multiply(2, '1')).toBeNull();
    });
    it('ignores any arguments passed in after the first two', () => {
      expect(arithmetic.multiply(1, 2, 3)).toBe(2);
    });
  });

  describe('improper use of arithmetic.divide()', () => {
    it('returns null if invoked with no arguments', () => {
      expect(arithmetic.divide()).toBeNull();
    });
    it('returns null if invoked with only one argument', () => {
      expect(arithmetic.divide(8)).toBeNull();
    });
    it('returns null if invoked with an argument that isn\'t a number', () => {
      expect(arithmetic.divide(2, '1')).toBeNull();
    });
    it('ignores any arguments passed in after the first two', () => {
      expect(arithmetic.divide(4, 2, 3)).toBe(2);
    });
  });
});

describe('PROPER USE', () => {
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

  describe('proper use of arithmetic.multiply()', () => {
    it('multiplys two positive numbers', () => {
      expect(arithmetic.multiply(3, 2)).toBe(6);
    });
    it('multiplys two negative numbers', () => {
      expect(arithmetic.multiply(-4, -2)).toBe(8);
    });
    it('multiplys a positive and a negative number', () => {
      expect(arithmetic.multiply(5, -2)).toBe(-10);
    });
  });

  describe('proper use of arithmetic.divide()', () => {
    it('divides two positive numbers', () => {
      expect(arithmetic.divide(4, 2)).toBe(2);
    });
    it('divides two negative numbers', () => {
      expect(arithmetic.divide(-6, -2)).toBe(3);
    });
    it('divides a positive and a negative number', () => {
      expect(arithmetic.divide(4, -2)).toBe(-2);
    });
  });
});

