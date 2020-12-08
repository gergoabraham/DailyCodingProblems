'use strict';

class Node {
  constructor(element, previousPointer = null) {
    this.element = element;
    this.both = previousPointer;

    registerElement(this);
  }
}

class XorLinkedList {
  _head = null;
  _tail = null;

  add(element) {
    if (this._head) {
      const node = new Node(element, getPointer(this._tail));
      this._tail.both ^= getPointer(node);
      this._tail = node;
    } else {
      this._head = new Node(element);
      this._tail = this._head;
    }
  }

  get(index) {
    if (index < 0) {
      return null;
    }

    let currentNode = this._head;
    let previousNode = null;
    let previousPointer = null;
    let currentIndex = 0;

    while (index > currentIndex) {
      if (currentNode === this._tail) {
        // we cannot go further
        return null;
      }

      previousNode = currentNode;
      currentNode = dereferencePointer(currentNode.both ^ previousPointer);
      previousPointer = getPointer(previousNode);

      currentIndex++;
    }

    return currentNode;
  }
}

// helper functions for address conversion
const elementToPointerMap = new Map();
const pointerToElementMap = new Map();

function registerElement(element, addressSpace = 2 ** 31 - 1) {
  const address = generateAddress(addressSpace);

  elementToPointerMap.set(element, address);
  pointerToElementMap.set(address, element);
}

function generateAddress(addressSpace) {
  let address;

  do {
    address = Math.ceil(Math.random() * addressSpace);
  } while (pointerToElementMap.has(address));

  return address;
}

function getPointer(element) {
  return elementToPointerMap.get(element);
}
function dereferencePointer(pointer) {
  return pointerToElementMap.get(pointer);
}

module.exports = {
  XorLinkedList,
  Node,
  registerElement,
  getPointer,
  dereferencePointer,
};
