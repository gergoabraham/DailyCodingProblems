'use strict';

const { Node, serialize, deserialize } = require('./#3');

describe('#3 - binary tree serialization and deserialization', function () {
  const node = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
  );

  test('sample test', function () {
    expect(deserialize(serialize(node)).left.left.value).toBe('left.left');
  });

  test('the restored tree is perfectly the same - incl. prototype', function () {
    const restoredNode = deserialize(serialize(node));

    expect(restoredNode).toStrictEqual(node);
  });
});
