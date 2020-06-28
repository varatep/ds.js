/**
 *
 * @param {any} val Any object or primitive to set as the value for the node.
 */
const TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};

module.exports = TreeNode;
