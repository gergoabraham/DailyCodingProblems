'use strict';

const { howManyWaysToDecode } = require('./#7');

describe('#7 - how many ways to decode?', function () {
  test('one way', function () {
    expect(howManyWaysToDecode('367941')).toBe(1);
  });

  describe('number rules', function () {
    test('10', function () {
      expect(howManyWaysToDecode('367610341')).toBe(1);
    });

    test('13', function () {
      expect(howManyWaysToDecode('36761341')).toBe(2);
    });

    test('19', function () {
      expect(howManyWaysToDecode('36761941')).toBe(2);
    });

    test('20', function () {
      expect(howManyWaysToDecode('666203666')).toBe(1);
    });

    test('23', function () {
      expect(howManyWaysToDecode('66623666')).toBe(2);
    });

    test('26', function () {
      expect(howManyWaysToDecode('662677')).toBe(2);
    });

    test('27', function () {
      expect(howManyWaysToDecode('662777')).toBe(1);
    });
  });

  describe('larger problem groups', function () {
    test('111', function () {
      expect(howManyWaysToDecode('111')).toBe(3);
    });

    test('1113', function () {
      expect(howManyWaysToDecode('1113')).toBe(5);
    });

    test('2112', function () {
      expect(howManyWaysToDecode('66672112996')).toBe(5);
    });

    test('21126', function () {
      expect(howManyWaysToDecode('666721126996')).toBe(8);
    });
  });

  describe('multiple problem groups', function () {
    test('14 & 21', function () {
      expect(howManyWaysToDecode('614921')).toBe(2 * 2);
    });

    test('15 & 216', function () {
      expect(howManyWaysToDecode('6159216')).toBe(2 * 3);
    });

    test('1213 & 2126', function () {
      expect(howManyWaysToDecode('1213992126')).toBe(5 * 5);
    });
  });

  describe('what about 10 and 20?', function () {
    test('210 -> one way', function () {
      expect(howManyWaysToDecode('210')).toBe(1);
    });

    test('110 -> one way', function () {
      expect(howManyWaysToDecode('110')).toBe(1);
    });
  });
});
