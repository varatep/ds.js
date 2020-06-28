const assert = require('assert');
const TreeNode = require('./index.js');

describe('TreeNode', function () {
  it('should instantiate with a default value of null', function () {
    const node = new TreeNode();
    assert.equal(node.val, null);
  });
  it('should instantiate with primitive value from constructor', function () {
    const node = new TreeNode(1);
    assert.equal(node.val, 1);
  });
  it('should instantiate with object value from constructor', function () {
    const obj = { hello: 'world' };
    const node = new TreeNode(obj);
    assert.equal(node.val, obj);
  });
  it('should instantiate with null children', function () {
    const node = new TreeNode();
    assert.equal(node.left, null);
    assert.equal(node.right, null);
  });
  it('should have children with values', function () {
    const node = new TreeNode(1);
    node.left = new TreeNode(0);
    node.right = new TreeNode(2);
    assert.equal(node.left.val, 0);
    assert.equal(node.right.val, 2);
  });
});
