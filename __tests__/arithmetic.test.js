'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('improper use', () => {
  it('returns null if invoked with no arguments', () => {
    expect(arithmetic.add()).toBeNull();
    expect(arithmetic.subtract()).toBeNull();
  });

  it('returns null if invoked with only one argument', () => {
    expect(arithmetic.add(8)).toBeNull();
    expect(arithmetic.subtract(8)).toBeNull();
  });

  it('ignores any arguments passed in after the first two', () => {
    expect(arithmetic.add(1, 2, 3)).toBe(3);
    expect(arithmetic.subtract(1, 2, 3)).toBe(-1);
  });

  it('returns null if invoked with an argument that isn\'t a number', () => {
    expect(arithmetic.add('1', 2)).toBeNull();
    expect(arithmetic.subtract(2, '1')).toBeNull();
  });

});
