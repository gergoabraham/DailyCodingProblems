'use strict';

function howManyWaysToDecode(encodedString) {
  // The problem can be divided into smaller independent problems.
  //    eg. '111966121' -> ['1119', '121']
  //
  // The following regex finds these, making sure that if there is a zero,
  // the number before the zero must stick to the number.
  //    eg. 110 is not relevant, because it can be decoded only as 1 and 10.
  const relevantGroups = encodedString.match(
    /([12]{2,}(?!0)((?<=1)[3-9]|(?<=2)[3-6])?|1[1-9](?!0)|2[1-6](?!0))/g
  );

  if (!relevantGroups) {
    return 1;
  }

  // Every group can also be divided into smaller subproblems.
  //    eg. we can divide 1111 as
  //        a) 1 and 1+1+1, which has 3 solutions (1 1 1, 11 1, 1 11)
  //        b) 11 (eleven) and 1+1, which has 2 solutions.
  //    so by summing the subproblems' numbers of solutions, we got 5.
  //
  // This can be done with larger groups, too.
  // Based on this, the numbers of solutions are Fibonacci numbers!
  //
  // Let's calculate the solution numbers for the separate groups.
  const numbersOfSolutions = relevantGroups.map((group) =>
    fibonacci(group.length + 1)
  );

  // By multiplying the numbers of solutions of the groups, we got the result.
  return numbersOfSolutions.reduce((prev, current) => prev * current);
}

function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = { howManyWaysToDecode };
