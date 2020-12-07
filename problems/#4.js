'use strict';

const EMPTY = null;
const EXISTS = true;

function findTheFirstMissingPositiveInteger(array) {
  //
  // The number values are mapped to array index (using one-based indexing):
  //
  //                         (1)     (2)     (3)    (4)
  // e.g. [3, 5, 1, -2] -> [EXISTS, EMPTY, EXISTS, EMPTY]
  //                       (negative and too large numbers are disposed)
  //
  // An ITERATION goes through the array and moves the numbers.
  // If the target position contains a valid number, RECURSION kicks in, and
  // moves that number, and again, and again, if needed.
  //
  // Worst case time complexity: if position targets always contain valid
  // numbers, both the RECURSION and the ITERATION go through all the numbers,
  // so this is 2n.
  mapPositiveIntegersToArrayPositions(array);

  // Then the first missing number is simply found with linear search -> n
  return findFirstMissing(array);

  // result: 2n + n -> O(n)
}

function mapPositiveIntegersToArrayPositions(array) {
  for (let i = 0; i < array.length; i++) {
    mapNumberToPosition(array, i);
  }
}

// <--- recursion entry point --->
function mapNumberToPosition(array, i) {
  const number = array[i];

  if (canNumberValueBeDisposed(number, array)) {
    // position is empty yet
    array[i] = EMPTY;
  } else if (isPositionNotYetProcessed(number)) {
    performMapping(array, number, i);
  }
}

function canNumberValueBeDisposed(number, array) {
  return number < 1 || number > array.length;
}

function isPositionNotYetProcessed(number) {
  return number !== EXISTS && number !== EMPTY;
}

function performMapping(array, number, original_pos) {
  const new_position = number - 1;

  if (array[new_position] === EXISTS) {
    // already mapped, can be removed from here
    array[original_pos] = EMPTY;
  } else if (array[new_position] === original_pos + 1) {
    // target position's number will be mapped here -> "swap" them to avoid
    // infinite recursion
    array[original_pos] = EXISTS;
    array[new_position] = EXISTS;
  } else {
    // first: empty the original place to avoid infinite recursion
    array[original_pos] = EMPTY;

    // then "free" the target position(s)
    mapNumberToPosition(array, new_position); //   <--- recursion entry point

    // then "move" the number
    array[new_position] = EXISTS;
  }
}

function findFirstMissing(array) {
  let i;

  for (i = 0; i < array.length; i++) {
    if (array[i] === EMPTY) {
      break;
    }
  }

  return i + 1;
}

module.exports = { findTheFirstMissingPositiveInteger };
