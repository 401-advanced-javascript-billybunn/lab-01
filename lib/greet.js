'use strict';

module.exports = exports = (name) => {
  if (typeof name === 'string') {
    return `hello ${name}`;
  } else {
    return null;
  }
};
