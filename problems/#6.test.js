'use strict';

const {
  XorLinkedList,
  Node,
  registerElement,
  getPointer,
  dereferencePointer,
} = require('./#6');

describe('#6 - XOR linked list', function () {
  test('empty list', function () {
    const emptyList = new XorLinkedList();

    expect(emptyList._head).toBeNull();
    expect(emptyList._tail).toBeNull();
    expect(emptyList.get(0)).toBeNull();
  });

  test("add first item - it's the head and tail", function () {
    const list = new XorLinkedList();
    list.add(3);

    expect(list._head instanceof Node).toBeTruthy();
    expect(list._head.element).toBe(3);
    expect(list._tail.element).toBe(3);
    expect(list._head.both).toBe(null);
  });

  test('add second element', function () {
    const list = new XorLinkedList();
    list.add(3);
    list.add(5);

    expect(list._head.element).toBe(3);
    expect(dereferencePointer(list._head.both).element).toBe(5);
    expect(list._tail.element).toBe(5);
  });

  test('get elements', function () {
    const list = new XorLinkedList();
    list.add(3);
    list.add(5);

    expect(list.get(0).element).toBe(3);
    expect(list.get(1).element).toBe(5);
  });

  test('get negative index', function () {
    const list = new XorLinkedList();
    list.add(3);

    expect(list.get(-1)).toBeNull();
  });

  test('get too large index', function () {
    const list = new XorLinkedList();
    list.add(3);

    expect(list.get(1)).toBeNull();
  });

  test('add multiple elements', function () {
    const list = new XorLinkedList();
    list.add(3);
    list.add(6);
    list.add(42);
    list.add(666);
    list.add(39);
    list.add('cheese');

    expect(list.get(0).element).toBe(3);
    expect(list.get(1).element).toBe(6);
    expect(list.get(2).element).toBe(42);
    expect(list.get(3).element).toBe(666);
    expect(list.get(4).element).toBe(39);
    expect(list.get(5).element).toBe('cheese');
  });

  test('the addresses are XOR values', function () {
    const list = new XorLinkedList();
    list.add(3);
    list.add(6);
    list.add(42);
    list.add(666);

    const nodes = [];
    nodes[0] = list.get(0);
    nodes[1] = list.get(1);
    nodes[2] = list.get(2);
    nodes[3] = list.get(3);

    expect(nodes[0].both).toBe(null ^ getPointer(nodes[1]));
    expect(nodes[1].both).toBe(getPointer(nodes[0]) ^ getPointer(nodes[2]));
    expect(nodes[2].both).toBe(getPointer(nodes[1]) ^ getPointer(nodes[3]));
    expect(nodes[3].both).toBe(getPointer(nodes[2]) ^ null);
  });

  describe('helper functions for address conversion', function () {
    test('every node has a unique address', function () {
      const a = 'a';
      const b = 'b';
      const c = 'c';

      registerElement(a, 3);
      registerElement(b, 3);
      registerElement(c, 3);

      const addresses = [getPointer(a), getPointer(b), getPointer(c)];
      expect(addresses).toContain(1);
      expect(addresses).toContain(2);
      expect(addresses).toContain(3);
    });

    test('element can be accessed by address', function () {
      const element = 'element';
      registerElement(element);

      expect(dereferencePointer(getPointer(element))).toBe('element');
    });
  });
});
