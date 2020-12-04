'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// the simplest solution ^^
function serialize(root) {
  return JSON.stringify(root);
}

function deserialize(data) {
  const root = JSON.parse(data);

  const setPrototypeOfNode = (node) =>
    Object.setPrototypeOf(node, Node.prototype);

  applyOnEveryNodeInTree(root, setPrototypeOfNode);

  return root;
}

// a depth-first traversal on the tree, with a pre-order callback function
function applyOnEveryNodeInTree(node, callback) {
  callback(node);
  node.left && applyOnEveryNodeInTree(node.left, callback);
  node.right && applyOnEveryNodeInTree(node.right, callback);
}

module.exports = {
  Node,
  serialize,
  deserialize,
};
