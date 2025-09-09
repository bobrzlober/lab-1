'use strict';

const countTypesInArray = (arr) => {
  const acc = {};
  for (const element of arr) {
    const type = typeof element;
    const count = acc[type] || 0;
    acc[type] = count + 1;
  }
  return acc;
};

module.exports = { countTypesInArray };