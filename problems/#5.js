'use strict';

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

// returns first element
function car(pair) {
  return pair((a, b) => a);
}

// returns last element
function cdr(pair) {
  return pair((a, b) => b);
}

module.exports = { cons, car, cdr };
