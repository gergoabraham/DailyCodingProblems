'use strict';

const { arrayProductWithDivision, arrayProductNoDivision } = require('./#2');

describe('#2 - products of array elements', function () {
  describe('division allowed', function () {
    test('test 1', function () {
      expect(arrayProductWithDivision([1, 2, 3, 4, 5])).toStrictEqual([
        120,
        60,
        40,
        30,
        24,
      ]);
    });

    test('test 2', function () {
      expect(arrayProductWithDivision([3, 2, 1])).toStrictEqual([2, 3, 6]);
    });
  });

  describe('division not allowed', function () {
    test('test 1', function () {
      expect(arrayProductNoDivision([1, 2, 3, 4, 5])).toStrictEqual([
        120,
        60,
        40,
        30,
        24,
      ]);
    });

    test('test 2', function () {
      expect(arrayProductNoDivision([3, 2, 1])).toStrictEqual([2, 3, 6]);
    });
  });
});
