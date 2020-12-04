'use strict';

const { isKTheSumOfAnyTwoNumbersInArray } = require('./#1');

describe('#1 - is K the sum of any two numbers in the array?', function () {
  test('nope', function () {
    expect(isKTheSumOfAnyTwoNumbersInArray(5, [1, 2, 6, 7])).toBe(false);
  });

  test('yep 1', function () {
    expect(isKTheSumOfAnyTwoNumbersInArray(5, [1, 2, 6, 7, 3])).toBe(true);
  });

  test('yep 2', function () {
    expect(isKTheSumOfAnyTwoNumbersInArray(7, [2, 2, 6, 7, 3, 1, 2, 7])).toBe(
      true
    );
  });
});
