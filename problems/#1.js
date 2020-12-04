'use strict';

function isKTheSumOfAnyTwoNumbersInArray(k, array) {
  const existingAddends = {};

  // building a "minimal frequency table" until the first pair is found - O(n)
  for (const addend of array) {
    const doesAddendPairExist = existingAddends[k - addend];

    if (doesAddendPairExist) {
      return true;
    } else {
      existingAddends[addend] = true;
    }
  }

  return false;
}

module.exports = { isKTheSumOfAnyTwoNumbersInArray };
