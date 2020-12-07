'use strict';

const { cons, car, cdr } = require('./#5');

describe('#5 - car() and cdr() for cons()', function () {
  test('car', function () {
    expect(car(cons(3, 4))).toBe(3);
  });

  test('cdr', function () {
    expect(cdr(cons(3, 4))).toBe(4);
  });
});
