'use strict';

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function countUnivalSubtrees(root) {
  const [dummy, number] = searchUnivalSubtrees(root);
  return number;
}

// This is a modified depth-first traversal algorithm, that counts the number of
// unival subtrees in the branches, and then checks if the current node with its
// branches also makes a unival subtree or not.
//
// Time complexity is O(n), because every node is traversed only once.
function searchUnivalSubtrees(node) {
  let numberOfUnivalSubtrees = 0;
  let isLeftTreeUnivalSubtree = true;
  let isRightTreeUnivalSubtree = true;
  let num;

  if (node.left) {
    [isLeftTreeUnivalSubtree, num] = searchUnivalSubtrees(node.left);
    numberOfUnivalSubtrees += num;
  }

  if (node.right) {
    [isRightTreeUnivalSubtree, num] = searchUnivalSubtrees(node.right);
    numberOfUnivalSubtrees += num;
  }

  let isUnivalTree = false;
  if (
    isLeftTreeUnivalSubtree &&
    isRightTreeUnivalSubtree &&
    isParentCompatibleWithItsChildren(node)
  ) {
    numberOfUnivalSubtrees++;
    isUnivalTree = true;
  }

  return [isUnivalTree, numberOfUnivalSubtrees];
}

function isParentCompatibleWithItsChildren(node) {
  return (
    (!node.left || node.left.data === node.data) &&
    (!node.right || node.right.data === node.data)
  );
}

module.exports = {
  Node,
  countUnivalSubtrees,
};
