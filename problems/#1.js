'use strict';

function isKTheSumOfAnyTwoNumbersInArray(k, array) {
  const existingAddends = {};

  for (const addend of array) {
    const doesAddendPairExist = existingAddends[k - addend];

    if (doesAddendPairExist) {
      return true;
    } else {
      existingAddends[addend] = 1;
    }
  }

  return false;
}

module.exports = { isKTheSumOfAnyTwoNumbersInArray };
