'use strict';

const { findTheFirstMissingPositiveInteger } = require('./#4');

describe('#4 - find the first missing positive integer', function () {
  test('test 1', function () {
    expect(findTheFirstMissingPositiveInteger([3, 4, -1, 1])).toBe(2);
  });

  test('test 2', function () {
    expect(findTheFirstMissingPositiveInteger([1, 2, 0])).toBe(3);
  });

  test('beware of duplicates!', function () {
    expect(findTheFirstMissingPositiveInteger([1, 2, 1, 2])).toBe(3);
  });

  test('beware of too large numbers!', function () {
    const array = [1, 2, 88, 3, 8, 3, 5];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(4);
    expect(array.length).toBe(7);
  });

  test('small array', function () {
    const array = [2];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(1);
    expect(array).toStrictEqual([null]);
  });

  test('only duplicates of ones', function () {
    const array = [1, 1, 1, 1];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(2);
    expect(array.length).toBe(4);
  });

  test('only duplicates of twos', function () {
    const array = [2, 2, 2, 2];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(1);
    expect(array).toStrictEqual([null, true, null, null]);
  });

  test('beware of infinite loops - switch two numbers', function () {
    const array = [4, 2, 3, 1];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(5);
    expect(array.length).toBe(4);
  });

  test('beware minus numbers', function () {
    const array = [-3];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(1);
    expect(array.length).toBe(1);
  });

  test('beware infinite recursion with 3 step swaps', function () {
    const array = [4, 1, 6, 2, 5];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(3);
    expect(array).toStrictEqual([true, true, null, true, true]);
  });

  test('beware infinite recursion with 4 step swaps', function () {
    const array = [1, 2, 7, -4, 3, 5, 6];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(4);
    expect(array.length).toBe(7);
  });

  test('and some random numbers just to make sure', function () {
    const array = [4, 2, 3, 1, 2, 5, -2, 99];
    expect(findTheFirstMissingPositiveInteger(array)).toBe(6);
    expect(array.length).toBe(8);
  });
});
