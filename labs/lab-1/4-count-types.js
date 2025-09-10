'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const element of arr) {
    const type = typeof element;
    var count = counters[type] || 0;
    counters[type] = count ++;
  }
  return counters;
};

module.exports = { countTypesInArray };