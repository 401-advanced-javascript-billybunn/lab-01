'use strict';

const greet = require('../lib/greet');

describe('returns null when you supply non-string values', () => {
  it('number', () => {
    expect(greet(0)).toBeNull(); // number
  });
  it('boolean', () => {
    expect(greet(true)).toBeNull(); // boolean
  });
  it('null', () => {
    expect(greet(null)).toBeNull(); // null
  });
  it('undefined', () => {
    expect(greet(undefined)).toBeNull(); // undefined
  });
  it('object', () => {
    expect(greet({})).toBeNull(); // object
  });
  it('symbol', () => {
    expect(greet(Symbol('foo'))).toBeNull(); // symbol
  });
});

describe('returns \'hello world\' when invoked with \'world\' as the first argument', () => {
  it('should be \'hello world\'', () => {
    expect(greet('world')).toBe('hello world');
  });
});

