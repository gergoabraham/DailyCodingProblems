'use strict';

const { Node, countUnivalSubtrees } = require('./#8');

describe('#8 - unival subtrees', function () {
  test('build a binary tree', function () {
    const root = new Node(1, new Node(1), new Node(0));
    root.left.left = new Node(0);
    root.left.right = new Node(1);

    expect(root).toEqual({
      data: 1,
      left: {
        data: 1,
        left: {
          data: 0,
          left: null,
          right: null,
        },
        right: {
          data: 1,
          left: null,
          right: null,
        },
      },
      right: {
        data: 0,
        left: null,
        right: null,
      },
    });
  });

  describe('unival subtrees', function () {
    test('1 (1)', function () {
      const root = new Node(1);
      expect(countUnivalSubtrees(root)).toBe(1);
    });

    test('1 (0)', function () {
      const root = new Node(0);
      expect(countUnivalSubtrees(root)).toBe(1);
    });

    test('2', function () {
      const root = new Node(0, new Node(1), new Node(0));
      expect(countUnivalSubtrees(root)).toBe(2);
    });

    test('2 - only one child', function () {
      const root = new Node(0, new Node(0));
      expect(countUnivalSubtrees(root)).toBe(2);
    });

    test('3', function () {
      const root = new Node(0, new Node(0), new Node(0));
      expect(countUnivalSubtrees(root)).toBe(3);
    });

    test('5', function () {
      const root = new Node(
        0,
        new Node(1),
        new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
      );
      expect(countUnivalSubtrees(root)).toBe(5);
    });

    test('left child not a unival subtree', function () {
      const root = new Node(0, new Node(0, new Node(1)), new Node(0));
      expect(countUnivalSubtrees(root)).toBe(2);
    });

    test('right child not a unival subtree', function () {
      const root = new Node(0, new Node(0), new Node(0, new Node(1)));
      expect(countUnivalSubtrees(root)).toBe(2);
    });

    test('8 - all', function () {
      const root = new Node(
        1,
        new Node(1, new Node(1, new Node(1)), new Node(1)),
        new Node(1, new Node(1), new Node(1))
      );
      expect(countUnivalSubtrees(root)).toBe(8);
    });

    test('6', function () {
      const root = new Node(
        1,
        new Node(0, new Node(1, new Node(1)), new Node(1)),
        new Node(1, new Node(1), new Node(1))
      );
      expect(countUnivalSubtrees(root)).toBe(6);
    });
  });
});
