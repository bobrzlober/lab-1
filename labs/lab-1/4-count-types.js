'use strict';

const countTypesInArray = (arr) => {
  const acc = {};
  for (const Element of arr) {
    const type = typeof Element;
    var count = acc[type] || 0;
    acc[type] = count ++;
  }
  return acc;
};
const arr = [true, "hello", 5, 12, -200, false, "false", "word"];
console.log(countTypesInArray(arr));