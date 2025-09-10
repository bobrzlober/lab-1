'use strict';

const inc = (obj) => {
  if (typeof obj === Object) {
    obj.n--;
  }
};

module.exports = { inc };
