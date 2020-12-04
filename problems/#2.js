'use strict';

// O(n) with division operator
function arrayProductWithDivision(input) {
  const productOfAllElements = input.reduce((prev, curr) => prev * curr);

  const productsOfAllExceptCurrentElement = input.map(
    (element) => productOfAllElements / element
  );

  return productsOfAllExceptCurrentElement;
}

// O(n) without division operator
function arrayProductNoDivision(input) {
  const result = Array(input.length);

  result[0] = 1;
  let product = 1;
  for (let i = 1; i < input.length; i++) {
    product *= input[i - 1];
    // every element is the product of the previous elements
    result[i] = product;
  }

  product = 1;
  for (let i = input.length - 2; i >= 0; i--) {
    product *= input[i + 1];
    // now the next elements are considered, too
    result[i] *= product;
  }

  return result;
}

module.exports = { arrayProductWithDivision, arrayProductNoDivision };
