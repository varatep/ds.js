const assert = require('assert');

const ListNode = require('./index.js');

describe('ListNode', function () {
  it('should instantiate with a null value by default', function () {
    const node = new ListNode();
    assert.equal(node.val, null);
  });
  it('should instantiate with value from constructor', function () {
    const node = new ListNode(1);
    assert.equal(node.val, 1);
  });
});
